'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContent}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.jpeg" alt="Egyptian Autistic Society Logo" />
        </Link>

        <button className={styles.menuButton} onClick={toggleMenu}>
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/app" className={styles.navLink}>
            Autismaina
          </Link>
          <Link href="/centers" className={styles.navLink}>
            Our Centers
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="/terms" className={styles.navLink}>
            Terms
          </Link>
          <Link href="/app" className={styles.installButton}>
            <i className="fas fa-download"></i> Install App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 