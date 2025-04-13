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
import React from 'react';
import { ChatContainer } from '@ondrej_burval/fenix-chatbot';
import '@ondrej_burval/fenix-chatbot/style.css'; // Import styles

function App() {
  // Simple usage with default response generator
  return (
    <ChatContainer
      botName="Fenix Bot"
      botAvatar="/bot-avatar.png"
      userAvatar="/user-avatar.png"
      placeholder="Ask me anything..."
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

## Advanced Usage with Callbacks

```jsx
import React, { useState } from 'react';
import { ChatContainer } from '@ondrej_burval/fenix-chatbot';
import '@ondrej_burval/fenix-chatbot/style.css';

function AdvancedApp() {
  const [status, setStatus] = useState('');

  return (
    <div>
      <div>Status: {status}</div>

      <ChatContainer
        botName="Fenix Bot"
        initialMessages={[
          {
            id: 'bot-welcome',
            content: 'Hello! How can I help you today?',
            sender: 'bot',
            timestamp: new Date()
          }
        ]}
        callbacks={{
          // Called when message sending starts
          onSendStart: () => {
            setStatus('Sending message...');
          },

          // Called on successful response
          onSendSuccess: (message, response) => {
            setStatus(`Sent: "${message}" and received response`);
            // You can do analytics here
          },

          // Called on error
          onSendError: (message, error) => {
            setStatus(`Error sending: "${message}"`);
            console.error('Chat error:', error);
          },

          // Custom response generator
          generateResponse: async (message) => {
            // Add your API call here
            await new Promise(resolve => setTimeout(resolve, 1000));
            return `You sent: "${message}" and I'm a custom response!`;
          }
        }}
      />
    </div>
  );
}
```

## Props

| Prop Name       | Type                | Description                                      | Default     |
|-----------------|---------------------|--------------------------------------------------|-------------|
| initialMessages | Message[]           | Initial messages to display                      | []          |
| botName         | string              | Name of the bot                                  | 'Chatbot'   |
| botAvatar       | string              | URL to bot avatar image                          | undefined   |
| userAvatar      | string              | URL to user avatar image                         | undefined   |
| placeholder     | string              | Placeholder text for input                       | 'Type a message...' |
| theme           | Theme object        | Custom styling options                           | undefined   |
| callbacks       | ChatbotCallbacks    | Callback functions for chat events              | {}          |

## Interfaces

### Message Interface

```typescript
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
```

### Theme Interface

```typescript
interface Theme {
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
}
```

### ChatbotCallbacks Interface

```typescript
interface ChatbotCallbacks {
  // Called when sending starts
  onSendStart?: () => void;

  // Called when sending is successful with message and response
  onSendSuccess?: (message: string, response: string) => void;

  // Called when there's an error
  onSendError?: (message: string, error: any) => void;

  // Custom response generator
  generateResponse?: (message: string) => Promise<string>;
}
```

## Hooks

The package exports several hooks that you can use in your own components:

### useChatbot

New main hook that handles all the chat logic internally.

```typescript
import { useChatbot } from '@ondrej_burval/fenix-chatbot';

const ChatComponent = () => {
  const { messages, isLoading, sendMessage } = useChatbot({
    initialMessages: [], // Optional initial messages
    callbacks: {
      onSendStart: () => console.log('Started sending'),
      onSendSuccess: (msg, response) => console.log(`Sent: ${msg}, Got: ${response}`),
      onSendError: (msg, error) => console.error(`Error with: ${msg}`, error),
      generateResponse: async (message) => {
        // Your API call here
        return `Response to: ${message}`;
      }
    }
  });

  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>
          {msg.sender}: {msg.content}
        </div>
      ))}
      <button onClick={() => sendMessage('Hello')} disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Hello'}
      </button>
    </div>
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

## License

MIT
