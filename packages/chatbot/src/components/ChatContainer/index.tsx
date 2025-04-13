import React from 'react';
import { ChatbotProps } from '@/types';
import { Header } from '@/components/Header';
import { MessageList } from '@/components/MessageList';
import { InputArea } from '@/components/InputArea';
import { useMessages, useTheme } from '@/hooks';
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
  const { messages, isLoading, handleSendMessage } = useMessages({
    initialMessages,
    onSendMessage
  });

  const themeStyles = useTheme(theme);

  return (
    <div
      className={styles["chat-container"]}
      style={themeStyles}
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
