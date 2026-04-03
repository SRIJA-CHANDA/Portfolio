import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsSection.module.css';

const targetRepos = ['Audio-video-files', 'Daily-Mood-Journal', 'Click-Counter'];

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/SRIJA-CHANDA/repos', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Unable to load repositories from GitHub.');
        }

        const repositories = await response.json();
        // Keep the UI limited to the three repositories requested for the portfolio.
        const filteredProjects = repositories
          .filter((repo) => targetRepos.includes(repo.name))
          .sort((a, b) => targetRepos.indexOf(a.name) - targetRepos.indexOf(b.name))
          .map((repo) => ({
            ...repo,
            liveDemo: repo.homepage || '',
          }));

        setProjects(filteredProjects);
        setStatus('success');
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }

        setStatus('error');
      }
    };

    fetchProjects();

    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work from GitHub"
          description="These cards are loaded from the GitHub REST API and filtered to highlight a few focused builds."
        />

        {status === 'loading' ? (
          <motion.p
            className={styles.status}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Loading projects from GitHub...
          </motion.p>
        ) : null}

        {status === 'error' ? (
          <p className={styles.status}>
            GitHub projects could not be loaded right now. Please try again in a moment.
          </p>
        ) : null}

        {status === 'success' ? (
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ProjectsSection;
