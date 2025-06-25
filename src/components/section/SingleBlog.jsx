// src/components/section/SingleBlog.jsx
import React from 'react';

const SingleBlog = () => (
  <section style={styles}>
    <div style={styles.container}>
      <h1>The Science Behind the Perfect Fizz</h1>
      <p style={styles.meta}>Published on December 15, 2024 • By Dr. Emma Sparkle, Head of R&D</p>

      <div style={styles.content}>
        <p style={styles.intro}>
          Have you ever wondered what makes ChillFizz so uniquely refreshing? It's not just the natural flavors or premium ingredients – it's the perfect carbonation that creates that signature "fizz" experience.
        </p>

        <h3>The Carbonation Process</h3>
        <p>
          Our proprietary carbonation process involves injecting CO₂ at precisely controlled temperatures and pressures. This creates the ideal bubble size and distribution that gives ChillFizz its distinctive mouthfeel.
        </p>

        <h3>Why Bubble Size Matters</h3>
        <p>
          Smaller bubbles create a smoother sensation, while larger bubbles provide that satisfying "pop" on your tongue. Our R&D team has perfected a dual-carbonation technique that delivers both experiences in every sip.
        </p>

        <h3>Quality Control</h3>
        <p>
          Every batch undergoes rigorous testing to ensure consistent carbonation levels. Our state-of-the-art facilities monitor CO₂ concentration, bubble stability, and flavor integration throughout the production process.
        </p>

        <div style={styles.callout}>
          <h4>Did You Know?</h4>
          <p>It takes exactly 72 hours from initial mixing to final bottling to achieve the perfect ChillFizz carbonation profile!</p>
        </div>
      </div>
    </div>
  </section>
);

const styles = {
  minHeight: '100vh',
  padding: '4rem',
    //background: 'linear-gradient(145deg, #1e1e1e, #292929, #141414)',
  backgroundColor: '#3f51b5',
  color: 'white',
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left',
  },
  meta: {
    fontSize: '0.9rem',
    opacity: '0.8',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  content: {
    lineHeight: '1.8',
    fontSize: '1.1rem',
  },
  intro: {
    fontSize: '1.3rem',
    fontWeight: '300',
    marginBottom: '2rem',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  callout: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '2rem',
    borderRadius: '15px',
    marginTop: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
  },
};

export default SingleBlog;