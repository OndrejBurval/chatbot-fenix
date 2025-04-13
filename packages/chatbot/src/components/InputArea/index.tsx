import React, { useState, FormEvent } from 'react';
import { InputAreaProps } from '@/types';
import styles from './InputArea.module.scss';

export const InputArea: React.FC<InputAreaProps> = ({
  onSendMessage,
  placeholder = 'Type a message...',
  isLoading = false
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className={styles["input-area"]} onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        disabled={isLoading}
        className={styles["input-area__input"]}
        aria-label="Message input"
      />
      <button
        type="submit"
        disabled={isLoading || !message.trim()}
        className={styles["input-area__button"]}
        aria-label="Send message"
      >
        {isLoading ? (
          <span className={styles["input-area__loading"]}>...</span>
        ) : (
          <span>Send</span>
        )}
      </button>
    </form>
  );
};
