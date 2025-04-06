'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className={styles.contactHeroContent}>
          <h1>Get in Touch</h1>
          <p>We're here to help and answer any questions you might have</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className={styles.contactInfo}>
        <div className={styles.contactInfoContainer}>
          <div className={styles.contactInfoCard}>
            <div className={styles.iconWrapper}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Visit Us</h3>
            <p>123 Autism Support Street</p>
            <p>Cairo, Egypt</p>
          </div>
          
          <div className={styles.contactInfoCard}>
            <div className={styles.iconWrapper}>
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>+20 123 456 7890</p>
            <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
          </div>
          
          <div className={styles.contactInfoCard}>
            <div className={styles.iconWrapper}>
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>info@egyptianautisticsociety.org</p>
            <p>support@egyptianautisticsociety.org</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.contactFormContainer}>
          <div className={styles.formHeader}>
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible</p>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required
                placeholder="Enter subject"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </>
              )}
            </button>
            
            {submitSuccess && (
              <div className={styles.successMessage}>
                <i className="fas fa-check-circle"></i>
                <p>Your message has been sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            
            {submitError && (
              <div className={styles.errorMessage}>
                <i className="fas fa-exclamation-circle"></i>
                <p>{submitError}</p>
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
} 