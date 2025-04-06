'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AutismApp() {
  const [isClient, setIsClient] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Use useEffect to ensure we're on the client side before rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      id: 1,
      title: 'Personalized Learning',
      description: 'Our app adapts to each child\'s unique learning style and pace, providing customized content and activities that help them develop essential skills.',
      icon: 'fas fa-brain',
      color: '#4CAF50'
    },
    {
      id: 2,
      title: 'Progress Tracking',
      description: 'Monitor your child\'s development with detailed progress reports, milestone tracking, and insights that help you understand their growth journey.',
      icon: 'fas fa-chart-line',
      color: '#2196F3'
    },
    {
      id: 3,
      title: 'Interactive Activities',
      description: 'Engage with a wide range of interactive games and exercises designed to improve communication, social skills, and cognitive abilities.',
      icon: 'fas fa-gamepad',
      color: '#FF9800'
    },
    {
      id: 4,
      title: 'Parent Resources',
      description: 'Access a comprehensive library of resources, tips, and strategies to support your child\'s development and navigate the challenges of raising a child with autism.',
      icon: 'fas fa-book',
      color: '#9C27B0'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      role: 'Parent',
      quote: 'The Autism App has been a game-changer for our family. My son\'s communication skills have improved significantly since we started using it.',
      image: '/images/avatar.jfif'
    },
    {
      id: 2,
      name: 'Dr. Mohamed Hassan',
      role: 'Child Psychologist',
      quote: 'As a professional working with children on the spectrum, I highly recommend this app. It\'s based on evidence-based practices and provides valuable tools for development.',
      image: '/images/avatar.jfif'
    },
    {
      id: 3,
      name: 'Nour Ibrahim',
      role: 'Special Education Teacher',
      quote: 'I use this app in my classroom, and the results are remarkable. The children are more engaged and making progress faster than with traditional methods alone.',
      image: '/images/avatar.jfif'
    }
  ];

  // Only render the full content when on the client side
  if (!isClient) {
    return (
      <main className={styles.main}>
        <Navbar />
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading app information...</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.appHero}>
        <div className={styles.appHeroContent}>
          <div className={styles.heroText}>
            <h1>Autism Support App</h1>
            <p>Empowering individuals with autism through technology</p>
            <div className={styles.appButtons}>
              <button className={styles.appButton}>
                <i className="fab fa-apple"></i>
                <div>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className={styles.appButton}>
                <i className="fab fa-google-play"></i>
                <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/logo.jpeg" alt="Autism Support App" />
            <div className={styles.floatingElement}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2>Powerful Features</h2>
          <p>Our app is designed with the unique needs of individuals with autism in mind</p>
        </div>
        
        <div className={styles.featuresContainer}>
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`${styles.featureItem} ${activeFeature === index ? styles.active : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={styles.featureIcon} style={{ backgroundColor: feature.color }}>
                  <i className={feature.icon}></i>
                </div>
                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.featurePreview}>
            <div className={styles.previewImage}>
              <img 
                src={`/images/feature-${activeFeature + 1}.png`} 
                alt={features[activeFeature].title} 
              />
            </div>
            <div className={styles.previewContent}>
              <h3>{features[activeFeature].title}</h3>
              <p>{features[activeFeature].description}</p>
              <button className={styles.learnMoreButton}>
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2>What People Say</h2>
          <p>Hear from parents, professionals, and users of our app</p>
        </div>
        
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialImage}>
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA Section */}
      <section className={styles.downloadCTA}>
        <div className={styles.downloadContent}>
          <h2>Ready to Get Started?</h2>
          <p>Download our app today and take the first step towards empowering your child</p>
          <div className={styles.appButtons} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button className={styles.appButton}>
              <i className="fab fa-apple"></i>
              <div>
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </button>
            <button className={styles.appButton}>
              <i className="fab fa-google-play"></i>
              <div>
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 