import styles from '../styles/SkillCard.module.css';

export default function SkillCard({ skill }) {
  return (
    <div className={styles.card}>
      <h2 className="text-xl font-bold">{skill.type}</h2>
      <h3 className="text-md font-semibold">{skill.title}</h3>
      <p className="text-sm">{skill.description}</p>
    </div>
  );
}
