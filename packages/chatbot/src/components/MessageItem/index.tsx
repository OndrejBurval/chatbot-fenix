import React from 'react';
import { MessageItemProps } from '@/types';
import styles from './MessageItem.module.scss';

export const MessageItem: React.FC<MessageItemProps> = ({
  message,
  botName = 'Bot',
  botAvatar,
  userAvatar
}) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`${styles["message-item"]} ${isBot ? styles["message-item--bot"] : styles["message-item--user"]}`}>
      {isBot && botAvatar && (
        <div className={styles["message-item__avatar"]}>
          <img src={botAvatar} alt={`${botName} avatar`} />
        </div>
      )}

      {!isBot && userAvatar && (
        <div className={styles["message-item__avatar"]}>
          <img src={userAvatar} alt="User avatar" />
        </div>
      )}

      <div className={styles["message-item__content"]}>
        {isBot && (
          <div className={styles["message-item__sender"]}>{botName}</div>
        )}
        <div className={styles["message-item__text"]}>{message.content}</div>
        <div className={styles["message-item__timestamp"]}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};
