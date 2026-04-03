import { FiCode, FiGlobe, FiLayers } from 'react-icons/fi';
import { SiJavascript, SiLinux, SiPython, SiReact } from 'react-icons/si';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import styles from '../styles/SkillsSection.module.css';

const skills = [
  { label: 'HTML', icon: FiCode },
  { label: 'CSS', icon: FiLayers },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'Python', icon: SiPython },
  { label: 'React', icon: SiReact },
  { label: 'Linux', icon: SiLinux },
  { label: 'Networking', icon: FiGlobe },
];

function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use right now"
          description="A compact stack focused on building, shipping, and understanding systems end to end."
        />

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <SkillCard key={skill.label} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
