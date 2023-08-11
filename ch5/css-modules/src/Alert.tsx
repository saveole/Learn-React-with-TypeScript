import { useState } from 'react';
import styles from './Alert.module.css';

type Props = {
  type?: string;
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return <div>Gone!</div>;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <div className={styles.header}>
        <span
          className={styles.headerIcon}
          role="img"
          aria-label={type === 'warning' ? 'Warning' : 'Information'}
        >
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span className={styles.headerText}>{heading}</span>
      </div>
      {closable && (
        <button className={styles.closeButton} aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
}