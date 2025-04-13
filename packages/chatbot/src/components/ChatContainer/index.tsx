import React, { useState, useCallback } from 'react';
import { ChatbotProps, Message } from '@/types';
import { Header } from '@/components/Header';
import { MessageList } from '@/components/MessageList';
import { InputArea } from '@/components/InputArea';
import styles from './ChatContainer.module.scss';

export const ChatContainer: React.FC<ChatbotProps> = ({
  initialMessages = [],
  botName = 'Chatbot',
  botAvatar,
  userAvatar,
  placeholder = 'Type a message...',
  onSendMessage,
  theme,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    // Add user message to state
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    if (onSendMessage) {
      setIsLoading(true);
      try {
        await onSendMessage(content);
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [onSendMessage]);

  return (
    <div
      className={styles["chat-container"]}
      style={{
        '--primary-color': theme?.primaryColor,
        '--background-color': theme?.backgroundColor,
        '--text-color': theme?.textColor,
        '--font-family': theme?.fontFamily,
      } as React.CSSProperties}
    >
      <Header botName={botName} botAvatar={botAvatar} />
      <MessageList
        messages={messages}
        botName={botName}
        botAvatar={botAvatar}
        userAvatar={userAvatar}
      />
      <InputArea
        onSendMessage={handleSendMessage}
        placeholder={placeholder}
        isLoading={isLoading}
      />
    </div>
  );
};
