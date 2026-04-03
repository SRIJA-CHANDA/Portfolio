import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from '../styles/SocialLinks.module.css';

const socialItems = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/srija-chanda-73308a315/',
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SRIJA-CHANDA',
    icon: FiGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/yeanu_/',
    icon: FiInstagram,
  },
  {
    label: 'Email',
    href: 'mailto:chandasrija730@gmail.com',
    icon: FiMail,
  },
];

function SocialLinks() {
  return (
    <div className={styles.socials}>
      {socialItems.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          className={styles.socialLink}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
