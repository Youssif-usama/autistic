'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroContent}>
          <h1>About Us</h1>
          <p>Empowering individuals with autism through comprehensive support and care</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={styles.whoWeAre}>
        <div className={styles.whoWeAreContent}>
          <div className={styles.whoWeAreText}>
            <h2>Who We Are</h2>
            <p>
              The Egyptian Autistic Society is a pioneering organization dedicated to supporting individuals with autism and their families. Since our establishment, we have been at the forefront of providing comprehensive care, education, and support services to the autism community in Egypt.
            </p>
            <p>
              Our team consists of experienced professionals, including specialists, therapists, educators, and volunteers who work together to create an inclusive and supportive environment for individuals with autism.
            </p>
            <div className={styles.statsContainer}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years of Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Families Supported</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Specialists</span>
              </div>
            </div>
          </div>
          <div className={styles.whoWeAreImage}>
            <img src="/images/team.jpg" alt="Our Team" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionVision}>
        <div className={styles.missionVisionContent}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'mission' ? styles.active : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'vision' ? styles.active : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
          </div>
          <div className={styles.tabContent}>
            {activeTab === 'mission' && (
              <div className={styles.mission}>
                <div className={styles.iconContainer}>
                  <i className="fas fa-bullseye"></i>
                </div>
                <h2>Our Mission</h2>
                <p>
                Established in early 1999, the Egyptian Autistic Society is a non-profit organization licensed by the Ministry of Social Affairs under license number 4625. Its primary mission is to support individuals with autism and their families, while also increasing awareness and understanding of autism in Egypt.
                </p>

              </div>
            )}
            {activeTab === 'vision' && (
              <div className={styles.vision}>
                <div className={styles.iconContainer}>
                  <i className="fas fa-eye"></i>
                </div>
                <h2>Our Vision</h2>
                <p>
                  To create a world where individuals with autism are fully accepted, supported, and empowered to reach their full potential, contributing meaningfully to society.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.valuesContent}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-heart"></i>
              </div>
              <h3>Compassion</h3>
              <p>We approach our work with empathy and understanding, recognizing the unique needs of each individual.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-star"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for the highest standards in all our services and programs, continuously improving our practices.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-users"></i>
              </div>
              <h3>Inclusivity</h3>
              <p>We believe in creating an inclusive environment where everyone feels valued and supported.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We work together with families, communities, and partners to achieve our goals.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 