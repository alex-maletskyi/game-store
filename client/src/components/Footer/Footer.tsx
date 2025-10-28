import styles from './Footer.module.css';
/* importing the icons we need from the "react-icons/fa" and "react-icons/bs" libraries */
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.connectText}>Connect with us</p>
      
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <BsTwitterX />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>

      <p className={styles.copyright}>© GameStore</p>
    </footer>
  );
};

export default Footer;