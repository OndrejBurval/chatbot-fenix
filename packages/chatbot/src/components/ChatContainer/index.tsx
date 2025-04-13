import React from 'react';
import { ChatbotProps } from '@/types';
import { Header } from '@/components/Header';
import { MessageList } from '@/components/MessageList';
import { InputArea } from '@/components/InputArea';
import { useTheme, useChatbot } from '@/hooks';
import styles from './ChatContainer.module.scss';

export const ChatContainer: React.FC<ChatbotProps> = ({
  initialMessages = [],
  botName = 'Chatbot',
  botAvatar,
  userAvatar,
  placeholder = 'Type a message...',
  theme,
  callbacks = {}
}) => {
  const { messages, isLoading, sendMessage } = useChatbot({
    initialMessages,
    callbacks
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
        onSendMessage={sendMessage}
        placeholder={placeholder}
        isLoading={isLoading}
      />
    </div>
  );
};
