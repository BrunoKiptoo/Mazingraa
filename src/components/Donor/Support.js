
          
import React, { useState, useEffect } from 'react';

function Support() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  

  useEffect(() => {
    fetch(' https://mazingira-api.onrender.com/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, []);

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = {
      text: newMessage,
      sender: 'user',
      attachment: attachment,
      createdAt: new Date(),
    };
    fetch(' https://mazingira-api.onrender.com/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMessages([...messages, data]);
        setNewMessage('');
        setAttachment(null);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-4 ">
  <h1 className="text-2xl font-bold mb-4">Support Chat</h1>
  <div className="overflow-y-auto max-h-96 space-y-2 mb-4">
    {messages.map((message) => (
      <div
        key={message.id}
        className={`flex ${
          message.sender === 'user' ? 'justify-end' : 'justify-start'
        }`}
      >
        <div
          className={`p-2 rounded-xl ${
            message.sender === 'user' ? 'bg-blue-500 text-white ml-2' : 'bg-gray-200 text-black mr-2'
          }`}
        >
          <p className="text-sm">{message.text}</p>
          <p className="text-xs">{message.sender}</p>
          <p className="text-xs">{message.createdAt}</p>
        </div>
      </div>
    ))}
  </div>
  <form onSubmit={handleSendMessage} className="flex flex-col space-y-2">
    <textarea
      value={newMessage}
      onChange={handleNewMessageChange}
      placeholder="Type your message here..."
      className="border border-gray-300 p-2 rounded-md"
    />
    <input
      type="file"
      onChange={handleAttachmentChange}
      className="border border-gray-300 p-2 rounded-md"
    />
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-md"
    >
      Send
    </button>
  </form>
</div>
  );
}

export default Support;
