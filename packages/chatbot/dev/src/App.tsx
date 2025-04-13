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
  const [status, setStatus] = useState<string>("");

  return (
    <div className="app">
      <div className="app__header">
        <h1>Chatbot Fenix Demo</h1>
        <p>This is a demonstration of the Chatbot Fenix component</p>
        <div className="app__status">Status: {status || 'Idle'}</div>
      </div>

      <div className="app__chatbot-container">
        <ChatContainer
          initialMessages={initialMessages}
          botName="Fenix Assistant"
          botAvatar="https://placehold.co/200x200?text=Bot"
          userAvatar="https://placehold.co/200x200?text=You"
          placeholder="Ask me anything..."
          theme={{
            primaryColor: '#6b46c1',
            backgroundColor: '#f8f9fa',
            textColor: '#333333',
            fontFamily: 'Roboto, Arial, sans-serif',
          }}
          callbacks={{
            onSendStart: () => {
              setStatus('Sending message...');
            },
            onSendSuccess: (message, response) => {
              setStatus(`Message sent: "${message.substring(0, 20)}${message.length > 20 ? '...' : ''}"`);
            },
            onSendError: (message, error) => {
              setStatus(`Error sending message: ${error.message || 'Unknown error'}`);
            },
            generateResponse: async (message) => {
              // Simulate API delay
              await new Promise(resolve => setTimeout(resolve, 1500));

              // Simple response logic
              if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
                return 'Hello there! How can I help you today?';
              } else if (message.toLowerCase().includes('help')) {
                return 'I can help you with information, answer questions, or just chat. What would you like to know?';
              } else if (message.toLowerCase().includes('bye') || message.toLowerCase().includes('goodbye')) {
                return 'Goodbye! Have a great day!';
              } else if (message.toLowerCase().includes('thank')) {
                return "You're welcome! Is there anything else I can help you with?";
              } else {
                return `You said: "${message}". I'm a simple demo chatbot, so my responses are pre-defined. Try saying "hello", "help", "thanks", or "goodbye".`;
              }
            }
          }}
        />
      </div>

      <div className="app__controls">
        <h2>Demo Controls</h2>
        <button
          className="app__reset-button"
          onClick={() => window.location.reload()}
        >
          Reset Conversation
        </button>
      </div>
    </div>
  );
};

export default App;
