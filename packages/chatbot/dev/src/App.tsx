import React, { useState } from 'react';
import { ChatContainer, Message } from '@/index';
import '@/components/ChatContainer/ChatContainer.module.scss';
import '@/components/Header/Header.module.scss';
import '@/components/MessageList/MessageList.module.scss';
import '@/components/MessageItem/MessageItem.module.scss';
import '@/components/InputArea/InputArea.module.scss';
import './App.css';

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = async (content: string): Promise<void> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Add bot response after delay
    const botResponse: Message = {
      id: Date.now().toString(),
      content: `You said: "${content}". This is a simulated response.`,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, botResponse]);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>Chatbot Fenix Demo</h1>
        <p>This is a demonstration of the Chatbot Fenix component</p>
      </div>

      <div className="app__chatbot-container">
        <ChatContainer
          initialMessages={messages}
          botName="Fenix Assistant"
          botAvatar="https://placehold.co/200x200?text=Bot"
          userAvatar="https://placehold.co/200x200?text=You"
          placeholder="Ask me anything..."
          onSendMessage={handleSendMessage}
          theme={{
            primaryColor: '#6b46c1',
            backgroundColor: '#f8f9fa',
            textColor: '#333333',
            fontFamily: 'Roboto, Arial, sans-serif',
          }}
        />
      </div>

      <div className="app__controls">
        <h2>Demo Controls</h2>
        <button
          className="app__reset-button"
          onClick={() => setMessages(initialMessages)}
        >
          Reset Conversation
        </button>
      </div>
    </div>
  );
};

export default App;
