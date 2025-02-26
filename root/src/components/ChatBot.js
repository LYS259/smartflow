import React, { useState } from 'react';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      setInput('');
      // Call your backend API to get chatbot response
      fetch('/api/chatbot', { method: 'POST', body: JSON.stringify({ message: input }) })
        .then(res => res.json())
        .then(data => {
          setMessages(prevMessages => [...prevMessages, { user: 'Bot', text: data.reply }]);
        });
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}><strong>{msg.user}: </strong>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatBot;
