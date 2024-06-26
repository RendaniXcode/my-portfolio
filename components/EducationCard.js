import styles from '../styles/EducationCard.module.css';

export default function EducationCard({ education }) {
  return (
    <div className={styles.card}>
      <h2 className="text-xl font-bold">{education.title}</h2>
      <h3 className="text-md font-semibold">{education.institution}</h3>
      <p className="text-sm">{education.duration}</p>
      <p className="text-sm">{education.details}</p>
    </div>
  );
}
