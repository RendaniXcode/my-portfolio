import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1...',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2...',
    link: '#',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg mb-8">Showcase of my significant projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
