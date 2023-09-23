import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css'

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');

    const handleOptionClick = async (option) => {
        try {
            const response = await axios.post('http://localhost:3030/api/option', { option });
            setMessages([...messages, { content: response.data.message, sender: 'bot' }]);
        } catch (error) {
            console.error('Error selecting option:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessages([...messages, { content: messageText, sender: 'user' }]);

            const response = await axios.post('http://localhost:3030/chatgpt', { prompt: messageText });
            setMessages([...messages, { content: response.data.generatedText, sender: 'bot' }]);
        } catch (error) {
            console.error(error);
        }
        setMessageText(''); 
    };

    return (
        <div className='body-container'>
        <div className='main-container'>
            <div className='options-container'>
                <button className='optionbtn' onClick={() => handleOptionClick('Depression')}>Depression</button>
                <button className='optionbtn'onClick={() => handleOptionClick('Frustration')}>Frustration</button>
                <button className='optionbtn'onClick={() => handleOptionClick('Online Frustration')}>Online Frustration</button>
            </div>
            <div className='message-container'>
                    {messages.map((message, index) => (
                        <div id="actual-messages" key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
                            <h3>{message.content}</h3>
                        </div>
                    ))}
                </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="input"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                    />
                    <button type="submit" id='submitbtn'>Submit</button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default ChatBot;
