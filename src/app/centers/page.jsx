'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Centers() {
  const [hoveredCenter, setHoveredCenter] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to ensure we're on the client side before rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const centers = [
    {
      id: 1,
      title: 'Early Intervention Center',
      description: 'Our flagship facility provides specialized programs for children under 6 years old, focusing on early diagnosis and intervention techniques that have proven successful in improving developmental outcomes.',
      image: '/images/center-1.png',
      location: 'Cairo, Egypt',
      services: ['Early Diagnosis', 'Behavioral Therapy', 'Parent Training', 'Speech Therapy']
    },
    {
      id: 2,
      title: 'Education & Training Center',
      description: 'This state-of-the-art facility offers comprehensive educational programs tailored to individual learning needs and styles, helping children with autism develop academic and social skills in a supportive environment.',
      image: '/images/center-1.png',
      location: 'Alexandria, Egypt',
      services: ['Academic Support', 'Social Skills Training', 'Occupational Therapy', 'Sensory Integration']
    },
    {
      id: 3,
      title: 'Therapy & Support Center',
      description: 'Our specialized therapy center brings together a team of experienced professionals who provide a range of therapeutic services designed to address the unique challenges faced by individuals with autism.',
      image: '/images/center-1.png',
      location: 'Giza, Egypt',
      services: ['Speech Therapy', 'Occupational Therapy', 'Behavioral Therapy', 'Group Sessions']
    },
  ];

  // Only render the full content when on the client side
  if (!isClient) {
    return (
      <main className={styles.main}>
        <Navbar />
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading centers information...</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.centersHero}>
        <div className={styles.centersHeroContent}>
          <h1>Our Centers</h1>
          <p>Discover our specialized facilities dedicated to supporting individuals with autism</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.introductionContent}>
          <h2>Our Network of Support</h2>
          <p>
            The Egyptian Autistic Society operates multiple specialized centers across Egypt, each designed to provide comprehensive care and support for individuals with autism and their families. Our facilities are staffed by experienced professionals who are passionate about making a difference in the lives of those we serve.
          </p>
          <p>
            Each center is uniquely equipped to address specific needs within the autism community, from early intervention programs for young children to specialized therapy services for individuals of all ages. We believe in creating inclusive environments where everyone feels valued, supported, and empowered to reach their full potential.
          </p>
        </div>
      </section>

      {/* Centers Grid Section */}
      <section className={styles.centers}>
        <div className={styles.centersGrid}>
          {centers.map((center) => (
            <div
              key={center.id}
              className={`${styles.centerCard} ${hoveredCenter === center.id ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredCenter(center.id)}
              onMouseLeave={() => setHoveredCenter(null)}
            >
              <div className={styles.centerImage}>
                <img src={center.image} alt={center.title} />
                <div className={styles.locationTag}>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{center.location}</span>
                </div>
              </div>
              <div className={styles.centerContent}>
                <h3>{center.title}</h3>
                <p>{center.description}</p>
                <div className={styles.servicesList}>
                  <h4>Available Services:</h4>
                  <ul>
                    {center.services.map((service, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={styles.learnMoreButton}>
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactCTA}>
        <div className={styles.contactCTAContent}>
          <h2>Interested in Our Centers?</h2>
          <p>Contact us to learn more about our facilities or schedule a visit to one of our centers.</p>
          <button className={styles.contactButton}>
            <i className="fas fa-envelope"></i>
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
} 