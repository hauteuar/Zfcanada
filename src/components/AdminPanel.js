import React, { useState } from 'react';

function AdminPanel() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const news = { title, content, id: Date.now() };
        const currentNews = JSON.parse(localStorage.getItem('news')) || [];
        localStorage.setItem('news', JSON.stringify([...currentNews, news]));
        setTitle('');
        setContent('');
        alert('News/Ad Posted Successfully');
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    required
                />
                <button type="submit">Post News/Ad</button>
            </form>
        </div>
    );
}

export default AdminPanel;
