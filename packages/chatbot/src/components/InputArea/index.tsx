import React from 'react';
import { InputAreaProps } from '@/types';
import { useInput } from '@/hooks';
import styles from './InputArea.module.scss';

export const InputArea: React.FC<InputAreaProps> = ({
  onSendMessage,
  placeholder = 'Type a message...',
  isLoading = false
}) => {
  const { inputValue, handleInputChange, handleSubmit } = useInput({
    onSubmit: onSendMessage,
    isLoading
  });

  return (
    <form className={styles["input-area"]} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={isLoading}
        className={styles["input-area__input"]}
        aria-label="Message input"
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
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
