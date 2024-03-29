import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

function DisplayNews() {
    const [articles, setArticles] = useState([]);
    const [selectedArticleDetail, setSelectedArticleDetail] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    useEffect(() => {
        const q = query(collection(db, "articles"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const articlesData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articlesData);
        });

        return () => unsubscribe();
    }, []);

    // Function to fetch the detailed news document text from a URL
    const fetchDocumentText = async (url) => {
        try {
            const response = await fetch(url);
            const text = await response.text();
            setSelectedArticleDetail(text);
            setIsDetailModalOpen(true);
        } catch (error) {
            console.error("Error fetching document:", error);
            // Handle error (show error message or log)
        }
    };

    return (
        <div id="news-alerts" style={{marginTop:"10%"} }>
            <h1> Latest Canadian Immigration News and Alerts</h1>
            {articles.map((article) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <img src={article.imageUrl} alt={article.title} style={{ maxWidth: "60%" }} />
                    <p>Synopsis: {article.synopsis}</p>
                    <button onClick={() => fetchDocumentText(article.detailUrl)}>Read More</button>
                </div>
            ))}
            {isDetailModalOpen && (
                <DetailModal content={selectedArticleDetail} onClose={() => setIsDetailModalOpen(false)} />
            )}
        </div>
    );
}

function DetailModal({ content, onClose }) {
    return (
        <div className="overlay">
            <div className="modal">
                <div className="modal-content">
                    {content}
                </div>
                <button className="close-modal" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default DisplayNews;
