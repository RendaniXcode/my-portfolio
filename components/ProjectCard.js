import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="text-sm">{project.description}</p>
      <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
}
