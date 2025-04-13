import React from 'react';
import { HeaderProps } from '@/types';
import styles from './Header.module.scss';

export const Header: React.FC<HeaderProps> = ({
  botName = 'Chatbot',
  botAvatar
}) => {
  return (
    <div className={styles.header}>
      {botAvatar && (
        <div className={styles["header__avatar-container"]}>
          <img src={botAvatar} alt={`${botName} avatar`} className={styles["header__avatar"]} />
        </div>
      )}
      <h2 className={styles["header__title"]}>{botName}</h2>
    </div>
  );
};
