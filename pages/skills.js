import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SkillCard from '../components/SkillCard';
import styles from '../styles/Skills.module.css';

const skills = [
  { type: 'Technical Skills', title: 'Front-End Frameworks', description: 'Competent in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.' },
  { type: 'Technical Skills', title: 'Responsive Web Design', description: 'Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.' },
  { type: 'Soft Skills', title: 'Attention to Detail', description: 'Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.' },
  { type: 'Soft Skills', title: 'Time Management', description: 'Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.' },
];

export default function Skills() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <p className="text-lg mb-8">Check out my technical and soft skills.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
