import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from '../styles/FooterSection.module.css';

const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/srija-chanda-73308a315/', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/SRIJA-CHANDA', icon: FiGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/yeanu_/', icon: FiInstagram },
  { label: 'Email', href: 'mailto:chandasrija730@gmail.com', icon: FiMail },
];

function FooterSection({ year, onBackToTop }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <b><h3>Srija Chanda</h3></b>
          <p>Full-Stack Developer and Cybersecurity Practitioner</p>
        </div>

        <div className={styles.links}>
          {footerLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <button type="button" className={styles.backButton} onClick={onBackToTop}>
          Back to top
        </button>
      </div>

      <p className={styles.copy}>(c) {year} Srija Chanda. All rights reserved.</p>
    </footer>
  );
}

export default FooterSection;
