import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
    >
      <div className={styles.cardTop}>
        <span className={styles.badge}>Featured Project</span>
        <h3>{project.name}</h3>
      </div>

      <p className={styles.description}>
        {project.description || 'A focused project showcasing practical frontend and JavaScript skills.'}
      </p>

      <div className={styles.actions}>
        <a href={project.html_url} target="_blank" rel="noreferrer" className={styles.secondaryButton}>
          <FiGithub />
          GitHub
        </a>

        {project.liveDemo ? (
          <a href={project.liveDemo} target="_blank" rel="noreferrer" className={styles.primaryButton}>
            <FiArrowUpRight />
            Live Demo
          </a>
        ) : (
          <span className={styles.placeholder}>Live demo unavailable</span>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
