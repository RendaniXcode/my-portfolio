import styles from '../styles/ExperienceCard.module.css';

export default function ExperienceCard({ experience }) {
  return (
    <div className={styles.card}>
      <h2 className="text-xl font-bold">{experience.title}</h2>
      <h3 className="text-md font-semibold">{experience.company}</h3>
      <p className="text-sm">{experience.duration}</p>
      <p className="text-sm">{experience.details}</p>
    </div>
  );
}
