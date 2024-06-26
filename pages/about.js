import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>About Me</h1>
        <p>Details about you.</p>
      </main>
      <Footer />
    </div>
  );
}
