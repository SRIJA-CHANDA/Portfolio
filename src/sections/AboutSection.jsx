import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import styles from '../styles/AboutSection.module.css';

function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Curious builder with a security-first mindset"
          description="A simple snapshot of what drives my work and learning."
        />

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <b><p>
            I am a third-year AIML student who enjoys bringing ideas to life through frontend interfaces,
            full-stack projects, and hands-on cybersecurity learning. I actively participate in hackathons,
            love experimenting with new technologies, and keep building projects that sharpen both my
            creativity and technical foundation. My goal is to grow into a developer who can design useful,
            reliable, and secure digital experiences.
          </p></b>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
