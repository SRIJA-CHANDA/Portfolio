import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import TypingText from '../components/TypingText';
import styles from '../styles/HeroSection.module.css';

const heroPhrases = ['Full-Stack Developer', 'Cybersecurity Practitioner'];

function HeroSection({ onExplore }) {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroGrid}>
        <motion.div
          className={styles.leftPanel}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.intro}>Hi, I am</span>
          <h1 className={styles.title}>Srija Chanda</h1>
          <div className={styles.typingLine}>
            <span>I am a </span>
            <TypingText words={heroPhrases} />
          </div>
          <b><p className={styles.summary}>
            I build polished digital experiences with a practical full-stack mindset while exploring
            secure systems, clean architecture, and thoughtful problem-solving.
          </p></b>

          <div className={styles.ctaRow}>
            <button type="button" className={styles.primaryButton} onClick={onExplore}>
              Explore
            </button>
            <a href="/assets/resume.pdf" className={styles.secondaryButton} download>
              Download Resume
            </a>
          </div>

          <SocialLinks />
        </motion.div>

        <motion.div
          className={styles.rightPanel}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <div className={styles.imageFrame}>
            <div className={styles.orbit} />
            <img src="/assets/image.jpg" alt="Portrait of Srija Chanda" className={styles.profileImage} />
          </div>
          <b><p className={styles.tagline}>Full-Stack Developer | Cybersecurity Practitioner</p></b>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
