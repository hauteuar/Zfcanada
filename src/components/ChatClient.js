import React from 'react';
import ChatBot from 'react-simple-chatbot';

function ChatClient() {
    return (
        <ChatBot
            steps={[
                {
                    id: '1',
                    message: 'How can we help you today. What is your question about?',
                    trigger: '2',
                },
                {
                    id: '2',
                    options: [
                        { value: 1, label: 'Immigration', trigger: '3' },
                        { value: 2, label: 'Work/Study', trigger: '3' },
                        { value: 3, label: 'Business Immigration', trigger: '3' },
                    ],
                },
                {
                    id: '3',
                    message: 'Please send us an email at info@zfcanada.com with your detailed query.',
                    end: true,
                },
            ]}
        />
    );
}

export default ChatClient;
