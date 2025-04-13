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

## Usage

```jsx
import { ChatContainer } from '@chatbot-fenix/chatbot';
import '@chatbot-fenix/chatbot/dist/style.css';

function App() {
  const handleSendMessage = async (message) => {
    // Handle sending message logic here
    console.log('Message sent:', message);

    // Example: You can add bot response after API call
    // setMessages([...messages, { id: 'bot-1', content: 'Hello!', sender: 'bot', timestamp: new Date() }]);
  };

  return (
    <ChatContainer
      botName="Fenix Bot"
      botAvatar="/bot-avatar.png"
      userAvatar="/user-avatar.png"
      placeholder="Ask me anything..."
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
```

## License

MIT
