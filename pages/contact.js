import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-lg mb-8">Get in touch with me.</p>
        <form className={styles.form}>
          <label htmlFor='name' className={styles.label}>Name:</label>
          <input type='text' id='name' name='name' className={styles.inputField} required />
          
          <label htmlFor='email' className={styles.label}>Email:</label>
          <input type='email' id='email' name='email' className={styles.inputField} required />
          
          <label htmlFor='message' className={styles.label}>Message:</label>
          <textarea id='message' name='message' className={styles.textareaField} required></textarea>
          
          <button type='submit' className={styles.button}>Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
