import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">Hi, I'm Rendani Tshivhangani, a Senior Solutions Architect with deep expertise in technical infrastructure and Technology Strategy.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">Contact Me</button>
      </main>
      <Footer />
    </div>
  );
}
