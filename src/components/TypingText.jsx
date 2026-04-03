import { useEffect, useState } from 'react';
import styles from '../styles/TypingText.module.css';

function TypingText({ words, typingSpeed = 110, deletingSpeed = 65, pauseDuration = 1400 }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[wordIndex % words.length];
    const isWordComplete = text === activeWord;
    const isWordDeleted = text === '';

    let timeout = typingSpeed;

    if (isDeleting) {
      timeout = deletingSpeed;
    }

    if (!isDeleting && isWordComplete) {
      timeout = pauseDuration;
    }

    if (isDeleting && isWordDeleted) {
      timeout = 300;
    }

    const timer = window.setTimeout(() => {
      // Type forward, pause on a full word, then delete and move to the next label.
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordDeleted) {
        setIsDeleting(false);
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
        return;
      }

      setText((currentText) =>
        isDeleting ? activeWord.slice(0, currentText.length - 1) : activeWord.slice(0, currentText.length + 1),
      );
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [deletingSpeed, isDeleting, pauseDuration, text, typingSpeed, wordIndex, words]);

  return (
    <span className={styles.typingWrapper}>
      {text}
      <span className={styles.cursor} />
    </span>
  );
}

export default TypingText;
