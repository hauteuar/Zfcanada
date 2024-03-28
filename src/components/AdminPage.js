import React, { useState } from 'react';
import { storage, db } from '../firebase-config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function AdminPage() {
    const { isAuthenticated } = useAuth();
    const [title, setTitle] = useState('');
    const [synopsisText, setSynopsisText] = useState(''); // Now stores text
    const [detailFile, setDetailFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [adImage, setAdImage] = useState(null);

    const handleAdImageChange = e => setAdImage(e.target.files[0]);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    // Function to upload ad image for homepage slider
    const uploadAdImage = async () => {
        if (!adImage) return;
        setUploading(true);

        // Create a reference to the location where you want to upload the file
        const adRef = ref(storage, `ads/${adImage.name}`);

        // Upload the file
        await uploadBytes(adRef, adImage)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((adUrl) => {
                // Use adUrl
                const adData = {
                    imageUrl: adUrl,
                    uploadedAt: serverTimestamp(),
                };
                // Save adData to Firestore
                return addDoc(collection(db, "ads"), adData);
            })
            .then(() => {
                alert("Ad image uploaded successfully!");
                setUploading(false);
            })
            .catch((error) => {
                console.error("Error uploading ad image: ", error);
                setUploading(false);
            });
    };
    


    // Function to upload news article remains mostly unchanged
    const handleSynopsisChange = (e) => {
        const newText = e.target.value;
        const words = newText.split(/\s+/);
        if (words.length <= 150) {
            setSynopsisText(newText);
        } else {
            // Optionally alert the user that the limit has been reached
            alert("Synopsis cannot exceed 150 words.");
        }
    };

    // Function to upload news article
    const handleUpload = async () => {
        if (!imageFile || !detailFile || !synopsisText) return;
        setUploading(true);

        // Upload the image file
        const imageRef = ref(storage, `news/images/${imageFile.name}`);
        const imageUrl = await uploadBytes(imageRef, imageFile).then(snapshot => getDownloadURL(snapshot.ref));

        // Upload the detail news file
        const detailRef = ref(storage, `news/details/${detailFile.name}`);
        const detailUrl = await uploadBytes(detailRef, detailFile).then(snapshot => getDownloadURL(snapshot.ref));

        // Article data object now includes synopsisText directly
        const articleData = {
            title,
            imageUrl,
            synopsis: synopsisText, // Directly use text
            detailUrl,
            createdAt: serverTimestamp()
        };

        // Save the article data to Firestore
        try {
            await addDoc(collection(db, "articles"), articleData);
            alert("Article added!");
            setUploading(false);
        } catch (error) {
            console.error("Error adding article: ", error);
            setUploading(false);
        }
    };

    return (
        <div>
            <h2>Upload Ad Image for Homepage Slider</h2>
            <input type="file" onChange={handleAdImageChange} />
            <button disabled={uploading} onClick={uploadAdImage}>Upload Ad Image</button>
            <h2>Upload Article</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])} placeholder="Upload Image" />
            <textarea value={synopsisText} onChange={handleSynopsisChange} placeholder="Synopsis (max 150 words)" />
            <input type="file" onChange={(e) => setDetailFile(e.target.files[0])} placeholder="Upload Detail News" />
            <button disabled={uploading} onClick={handleUpload}>Upload Article</button>
        </div>
    );
}

export default AdminPage;


