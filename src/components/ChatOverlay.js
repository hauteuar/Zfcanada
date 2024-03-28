function App() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);

    return (
        <div className="App">
            <Header openChat={openChat} />
            {/* Your sections */}
            {isChatOpen && <ChatOverlay closeChat={closeChat} />}
        </div>
    );
}

function ChatOverlay({ closeChat }) {
    return (
        <div className="chat-overlay">
            <div className="chat-window">
                {/* Your chat content */}
                <button onClick={closeChat}>Close</button>
            </div>
        </div>
    );
}
