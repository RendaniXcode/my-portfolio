import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EducationCard from '../components/EducationCard';
import styles from '../styles/Education.module.css';

const education = [
  {
    title: 'MPhil in Strategic Management',
    institution: 'University of Pretoria - South Africa',
    duration: '01/2024 - Present',
    details: 'Advanced Concepts in Strategic Management, Applied Strategic Management, Strategic Management...',
  },
  {
    title: 'Postgraduate in Business Administration',
    institution: 'University of Johannesburg - South Africa',
    duration: '01/2022 - 01/2023',
    details: 'Delivered a comprehensive marketing strategy integrating digital literacy...',
  },
  // Add more education here
];

export default function Education() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className="text-4xl font-bold mb-4">Education & Certifications</h1>
        <p className="text-lg mb-8">See my education history.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
