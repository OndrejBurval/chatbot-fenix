# Chatbot Fenix

A simple, customizable React chatbot component built with React 19, TypeScript, and SCSS modules.

## Installation

```bash
# npm
npm install @ondrej_burval/fenix-chatbot

# pnpm
pnpm add @ondrej_burval/fenix-chatbot

# yarn
yarn add @ondrej_burval/fenix-chatbot
```

## Usage

```jsx
import React, { useState } from 'react';
import { ChatContainer, type Message } from '@ondrej_burval/fenix-chatbot';
import '@ondrej_burval/fenix-chatbot/style.css'; // Import styles

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

## Hooks

The package also exports several hooks that you can use in your own components:

### useMessages

Manages the state of chat messages and handles sending new messages.

```typescript
import { useMessages } from '@ondrej_burval/fenix-chatbot';

const MyComponent = () => {
  const { messages, isLoading, handleSendMessage } = useMessages({
    initialMessages: [], // Optional initial messages
    onSendMessage: async (message) => {
      // Your API call or message handling logic
      console.log('Message sent:', message);
    }
  });

  return (
    // Your custom UI
  );
};
```

### useInput

Manages the state of an input field and form submission.

```typescript
import { useInput } from '@ondrej_burval/fenix-chatbot';

const MyInputComponent = () => {
  const { inputValue, handleInputChange, handleSubmit } = useInput({
    onSubmit: (value) => {
      console.log('Submitted:', value);
    },
    isLoading: false // Optional loading state
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};
```

### useTheme

Creates CSS custom properties for theming.

```typescript
import { useTheme } from '@ondrej_burval/fenix-chatbot';

const ThemedComponent = () => {
  const themeStyles = useTheme({
    primaryColor: '#0084ff',
    backgroundColor: '#f5f5f5',
    textColor: '#333333',
    fontFamily: 'Arial, sans-serif'
  });

  return (
    <div style={themeStyles}>
      {/* Themed content */}
    </div>
  );
};
```

## License

MIT
