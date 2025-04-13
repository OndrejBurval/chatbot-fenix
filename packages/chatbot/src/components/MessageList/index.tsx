import React from 'react';
import { MessageListProps } from '@/types';
import { MessageItem } from '@/components/MessageItem';
import styles from './MessageList.module.scss';

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  botName,
  botAvatar,
  userAvatar
}) => {
  return (
    <div className={styles["message-list"]}>
      {messages.length === 0 ? (
        <div className={styles["message-list__empty-state"]}>No messages yet. Start a conversation!</div>
      ) : (
        messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            botName={botName}
            botAvatar={botAvatar}
            userAvatar={userAvatar}
          />
        ))
      )}
    </div>
  );
};
