import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceCard from '../components/ExperienceCard';
import styles from '../styles/Experience.module.css';

const experiences = [
  {
    title: 'Senior Solutions Architect',
    company: 'Red Hat Inc EMEA - South Africa',
    duration: '04/2023 - Present',
    details: 'Strategized and optimized Red Hat solutions to meet customer needs, translating technical features into significant business value...',
  },
  {
    title: 'AWS Solutions Architect',
    company: 'Amazon EMEA - South Africa',
    duration: '10/2021 - 03/2023',
    details: 'Utilized AWS Well-Architected Framework to optimize performance, reliability, and costs...',
  },
  // Add more experiences here
];

export default function Experience() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-lg mb-8">See my experience as a developer.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
