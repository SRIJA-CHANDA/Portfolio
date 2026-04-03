import { FiMoon, FiSun } from 'react-icons/fi';
import styles from '../styles/ThemeToggle.module.css';

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Activate ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className={styles.icon}>{theme === 'light' ? <FiMoon /> : <FiSun />}</span>
      <span>{theme === 'light' ? 'Dark' : 'Light'} mode</span>
    </button>
  );
}

export default ThemeToggle;
