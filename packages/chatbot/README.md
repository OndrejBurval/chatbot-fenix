# Chatbot Fenix

A simple, customizable React chatbot component built with React 19, TypeScript, and SCSS modules.

## Installation

```bash
# npm
npm install @chatbot-fenix/chatbot

# pnpm
pnpm add @chatbot-fenix/chatbot

# yarn
yarn add @chatbot-fenix/chatbot
```

## Usage

```jsx
import React, { useState } from 'react';
import { ChatContainer, Message } from '@chatbot-fenix/chatbot';
import '@chatbot-fenix/chatbot/style.css'; // Import styles

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    // Example: Add user message to state
    const userMessage = {
      id: `user-${Date.now()}`,
      content: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Example: Handle bot response after API call
    try {
      // Your API logic here
      const response = await simulateApiCall(message);

      const botMessage = {
        id: `bot-${Date.now()}`,
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Simulated API call
  const simulateApiCall = async (message) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `You said: "${message}". This is a response from the bot.`;
  };

  return (
    <ChatContainer
      initialMessages={messages}
      botName="Fenix Bot"
      botAvatar="/bot-avatar.png" // Path to bot avatar image
      userAvatar="/user-avatar.png" // Path to user avatar image
      placeholder="Type a message..."
      onSendMessage={handleSendMessage}
      theme={{
        primaryColor: '#0084ff',
        backgroundColor: '#f5f5f5',
        textColor: '#333333',
        fontFamily: 'Arial, sans-serif',
      }}
    />
  );
}

export default App;
```

## Props

| Prop Name       | Type                | Description                                      | Default     |
|-----------------|---------------------|--------------------------------------------------|-------------|
| initialMessages | Message[]           | Initial messages to display                      | []          |
| botName         | string              | Name of the bot                                  | 'Chatbot'   |
| botAvatar       | string              | URL to bot avatar image                          | undefined   |
| userAvatar      | string              | URL to user avatar image                         | undefined   |
| placeholder     | string              | Placeholder text for input                       | 'Type a message...' |
| onSendMessage   | (message: string) => Promise<void> | Function called when a message is sent | undefined   |
| theme           | Theme object        | Custom styling options                           | undefined   |

## Message Interface

```typescript
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
```

## Theme Interface

```typescript
interface Theme {
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
}
```

## License

MIT
