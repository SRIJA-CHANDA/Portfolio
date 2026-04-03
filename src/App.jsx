import { useEffect, useMemo, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ThemeToggle from './components/ThemeToggle';
import styles from './styles/App.module.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const getPreferredTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem('portfolio-theme');

  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState(getPreferredTheme);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.appShell}>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <header className={styles.topbar}>
        <a href="#hero" className={styles.brand}>
          SC
        </a>

        <nav className={styles.nav}>
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={styles.navLink}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <HeroSection theme={theme} onExplore={() => scrollToSection('contact')} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <FooterSection year={year} onBackToTop={() => scrollToSection('hero')} />

      {showTopButton ? (
        <button
          type="button"
          className={styles.floatingTopButton}
          onClick={() => scrollToSection('hero')}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      ) : null}
    </div>
  );
}

export default App;
