import { motion } from 'framer-motion';
import styles from '../styles/SkillCard.module.css';

function SkillCard({ icon: Icon, label, index }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
    >
      <span className={styles.iconWrap}>
        <Icon />
      </span>
      <h3>{label}</h3>
    </motion.article>
  );
}

export default SkillCard;
