'use client';

import React from 'react';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.termsContainer}>
        <div className={styles.termsContent}>
          <h1>Terms of Use</h1>
          <p className={styles.effectiveDate}>Effective Date: May 23, 2025</p>

          <div className={styles.introduction}>
            <p>
              Welcome to Autismaina! These Terms of Use ("Terms") govern your access to and use of our application ("App") and related services ("Service"). By using the App, you agree to these Terms. If you do not agree, do not use the App.
            </p>
          </div>

          <div className={styles.termsSection}>
            <h2>1. Eligibility</h2>
            <p>You must be at least 13 years old to use the App. If you are under 18, you may use the App only with the involvement of a parent or legal guardian.</p>
          </div>

          <div className={styles.termsSection}>
            <h2>2. User Conduct</h2>
            <p>You agree not to use the App to:</p>
            <ul>
              <li>Post or share any content that is abusive, threatening, hateful, discriminatory, or otherwise objectionable.</li>
              <li>Harass, bully, impersonate, or intimidate other users.</li>
              <li>Violate any laws or regulations.</li>
              <li>Upload viruses or malicious code.</li>
              <li>Collect or store personal information about other users.</li>
            </ul>
          </div>

          <div className={styles.termsSection}>
            <h2>3. Content Moderation</h2>
            <ul>
              <li>We reserve the right to review, moderate, and remove any content that violates these Terms or our community standards.</li>
              <li>Inappropriate content will be removed.</li>
              <li>Users who post offensive material may be suspended or banned.</li>
              <li>Content filtering systems and manual moderation tools are used to maintain a safe environment.</li>
            </ul>
          </div>

          <div className={styles.termsSection}>
            <h2>4. Reporting and Blocking</h2>
            <ul>
              <li>Users can report inappropriate content or behavior.</li>
              <li>Users can block others to prevent further contact.</li>
              <li>Our moderation team will review all reports and take action within 24 hours.</li>
            </ul>
          </div>

          <div className={styles.termsSection}>
            <h2>5. Limitation of Liability</h2>
            <ul>
              <li>
                The creators, developers, owners, and administrators
                of Autismaina shall not be held liable for any personal injury,
                loss, incident, or disagreement that may occur between users,
                arising out of or in connection with access to or use of the app
                and/or any information or content obtained therefrom. All
                participants acknowledge that the creators, developers, owners
                and administrators of Autismania do not, in any way, endorse
                any of the Buddies, nor guarantee the credibility, quality or
                reliability of the Buddies nor any information or content
                received therefrom. The Seekers are solely resonsible for all
                interactions with the Buddies and for ensuring, at their sole
                discretion, the accuracy and credibility of any information and
                content obtained through use of the app and/or through
                interactions with Buddies. The creators, developers, owners
                and administrators of Autismaina shall not be held liable for any
                claims, damages or losses arising out of or in connection with
                any interactions conducted through the app.
              </li>
              <li>
                Buddies are acting in good faith and assume no legal
                responsibility for the care or supervision of Seekers.
              </li>
              <li>
                Use of the app is at participants' own risk, and all
                participants agree to hold harmless Autismaina, its affiliates,
                creators, owners, administrators, developers and volunteers. All
                participants are severally responsible for taking any
                precautionary measures which may be deemed necessary
                thereby to ensure safe use of the app.
              </li>
            </ul>
          </div>

          <div className={styles.termsSection}>
            <h2>6. License and Intellectual Property</h2>
            <p>All content in the App is owned or licensed by Autismaina. You may not reproduce, distribute, or create derivative works without permission.</p>
          </div>

          <div className={styles.termsSection}>
            <h2>7. Termination</h2>
            <p>We may suspend or terminate your access at any time if you violate these Terms or for any other reason at our discretion.</p>
          </div>

          <div className={styles.termsSection}>
            <h2>8. Disclaimer and Limitation of Liability</h2>
            <p>The App is provided "as is" and without warranties. Autismaina is not liable for any indirect or incidental damages resulting from the use of the App.</p>
          </div>

          <div className={styles.termsSection}>
            <h2>9. Privacy</h2>
            <p>Your use of the App is also governed by our Privacy Policy.</p>
          </div>

          <div className={styles.termsSection}>
            <h2>10. Changes to the Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of any material changes. Continued use of the App means you accept the updated Terms.</p>
          </div>

          <div className={styles.termsSection}>
            <h2>11. Contact</h2>
            <p>If you have any questions about these Terms, contact us at:</p>
            <p className={styles.contactEmail}>📧 info@autismegypt.org</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
