'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Egyptian Autistic Society</h3>
          <p>Supporting and empowering individuals with autism in Egypt</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/app">Autismaina</Link></li>
            <li><Link href="/centers">Centers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Info</h3>
          <p><i className="fas fa-envelope"></i> info@egyptianautisticsociety.org</p>
          <p><i className="fas fa-phone"></i> +20 123 456 7890</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Egyptian Autistic Society. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 