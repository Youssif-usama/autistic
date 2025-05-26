'use client';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(`.${styles.parallax}`);
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Egyptian Autistic Society</h1>
          <p>Empowering individuals with autism through comprehensive support and care</p>
          <button className={styles.ctaButton}>Learn More</button>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partners}>
        <div className={styles.partnersContent}>
          <h2>Our Partners</h2>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerCard}>
              <div className={styles.partnerLogo}>
                <img src="/images/partner.png" alt="McDonald's" />
              </div>
              <div className={styles.partnerDetails}>
                <h3>McDonald's</h3>
                <p>For over a decade, the Egyptian Autistic Society (EAS) and Manfoods – McDonald’s Egypt have shared a powerful mission: to foster inclusion, empowerment, and opportunity for individuals with autism. This enduring partnership has led to the creation of impactful, sustainable programs that support individuals on the autism spectrum in developing vital life and work skills.
Manfoods- McDonald’s Egypt is pleased to collaborate with Egyptian Autistic Society as a platinum sponsor to bring “Every Body Needs a Buddy” to further underscores its community commitment at supporting differently abled individuals 
One of the most notable milestones of this partnership is the in-store training program, a pioneering effort designed to offer individuals with autism hands-on experience in a real-world environment. The program equips participants with the skills and confidence needed to transition into the workforce, fostering both independence and personal growth. Over 200 trainees have benefited so far, highlighting our commitment to creating a lasting impact that promotes diversity and inclusion in the workplace.
This collaboration is a testament to the impact of long-term partnerships grounded in shared values. Together, EAS and McDonald’s Egypt continue to drive awareness, champion inclusion, and create tangible opportunities for integration—ensuring every individual has the chance to thrive in a supportive community.
.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <h2>Our Services</h2>
          {/* <p>Comprehensive support for individuals with autism and their families</p> */}
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education</h3>
              <p>Tailored educational programs designed to meet individual learning needs and styles.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-comments"></i>
              </div>
              <h3>Therapy</h3>
              <p>Professional therapy services including speech, occupational, and behavioral therapy.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-users"></i>
              </div>
              <h3>Family Support</h3>
              <p>Resources and guidance for families, including counseling and support groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impact}>
        <div className={styles.impactContent}>
          <h2>Our Impact</h2>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <i className="fas fa-smile"></i>
              </div>
              <h3>Lives Transformed</h3>
              <span className={styles.impactNumber}>1000+</span>
              <p>Individuals with autism supported through our programs</p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <i className="fas fa-home"></i>
              </div>
              <h3>Families Supported</h3>
              <span className={styles.impactNumber}>800+</span>
              <p>Families receiving guidance and resources</p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Specialists</h3>
              <span className={styles.impactNumber}>50+</span>
              <p>Professional specialists working with us</p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Centers</h3>
              <span className={styles.impactNumber}>4</span>
              <p>Specialized centers across Egypt</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Join Us in Making a Difference</h2>
          <p>Together, we can create a more inclusive and supportive world for individuals with autism.</p>
          <button className={styles.ctaButton}>Get Involved</button>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
