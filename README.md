# Chatbot Fenix

A simple, customizable React chatbot component built with React 19, TypeScript, and SCSS modules.

## Project Structure

This project is set up as a monorepo using pnpm workspaces:

```
chatbot-fenix/
├── packages/
│   └── chatbot/          # Main chatbot component package
│       ├── src/
│       │   ├── components/
│       │   │   ├── ChatContainer/
│       │   │   ├── Header/
│       │   │   ├── MessageList/
│       │   │   ├── MessageItem/
│       │   │   └── InputArea/
│       │   ├── types/
│       │   └── index.ts
│       ├── dev/          # Development environment for local testing
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── package.json
└── pnpm-workspace.yaml
```

## Getting Started

### Prerequisites

- Node.js 16+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/chatbot-fenix.git
cd chatbot-fenix

# Install dependencies
pnpm install

# Build packages
pnpm build
```

## Local Development

To test and develop the chatbot component locally:

```bash
# Start the development server
pnpm dev

# This will launch a browser window with the demo app
# The server will run on http://localhost:3000 by default
```

The development environment includes a fully working demo application that showcases the chatbot component with simulated responses.

## Usage

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

## Features

- 🎨 Customizable styling
- 🔄 Message handling support
- 📱 Responsive design
- ♿ Accessibility features
- 🧩 Modular component architecture

## Development

```bash
# Run development server
pnpm dev

# Build package
pnpm build

# Run tests
pnpm test
```

## License

MIT
