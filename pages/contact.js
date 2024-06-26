import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.profileContainer}>
          <a href="https://linkedin.com/in/rendani49" target="_blank" rel="noopener noreferrer">
            <div className={styles.profilePicture}>
              <img src="/profile.jpg" alt="Rendani Tshivhangani" className={styles.profileImage} />
              <img src="/linkedin-logo.png" alt="LinkedIn" className={styles.linkedinIcon} />
            </div>
          </a>
        </div>
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
        <div className={styles.contactInfo}>
          <p><FaPhone className={styles.icon} /> 083 200-2196</p>
          <p><FaEnvelope className={styles.icon} /> rendani49@gmail.com</p>
          <p><FaLinkedin className={styles.icon} /> <a href="https://linkedin.com/in/rendani49" target="_blank" rel="noopener noreferrer">Rendani Tshivhangani</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
