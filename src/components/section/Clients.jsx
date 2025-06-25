import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    quote: "ChillFizz made my Father CHILL. Now I am allowed to wake up late.",
    name: "Mr. Jethalal Champaklal Gada",
    title: "Businessman",
  },
  {
    quote: "Finally, my sister got married because of this drink. In-laws agreed for ChillFizz instead of Alto!",
    name: "Mr. Raju Rastogi",
    title: "Bunji Jumper",
  },
  {
    quote: "ChillFizz got my Golden Chashma back. Everyone now says, 'Ye Baburao ka style hai!'",
    name: "Mr. Baburao Ganpatrao Aapte",
    title: "CEO, Laxmi Cheat Funds",
  },
];

const partners = ["Dmart", "Gada Electronics", "Furfuri Nagar", "Sanjivani University", "KoolStore", "SnackHub"];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Hide horizontal scrollbar for the testimonial slider
    const slider = document.querySelector('[data-testimonial-slider]');
    if (slider) {
      slider.style.scrollbarWidth = 'none';           // Firefox
      slider.style.msOverflowStyle = 'none';          // IE/Edge
      slider.style.overflowY = 'hidden';
      slider.style.WebkitOverflowScrolling = 'touch'; // iOS smooth scroll
    }
  }, []);

  return (
    <section style={styles.section}>
      {/* Intro */}
      <div style={styles.header}>
        <h1 style={styles.title}>🚀 Trusted by Thousands</h1>
        <p style={styles.subtitle}>
          ChillFizz isn’t just a drink. It’s a revolution. Here’s what real legends say.
        </p>
      </div>

      {/* Testimonials */}
      <div style={styles.testimonialSlider} data-testimonial-slider>
        {testimonials.map((t, index) => (
          <div
            key={index}
            style={styles.testimonialCard}
            data-aos="fade-left"
            data-aos-delay={index * 200}
          >
            <blockquote style={styles.quote}>"{t.quote}"</blockquote>
            <p style={styles.author}>
              — <strong>{t.name}</strong>, {t.title}
            </p>
          </div>
        ))}
      </div>

      {/* Partners Marquee */}
      <div style={styles.marqueeWrapper}>
        <h2 style={styles.partnerTitle}>🌟 Our Brand Allies</h2>
        <div style={styles.marquee}>
          <div style={styles.marqueeContent}>
            {partners.map((partner, index) => (
              <span key={index} style={styles.partnerBadge}>
                {partner}
              </span>
            ))}
            {partners.map((partner, index) => (
              <span key={index + partners.length} style={styles.partnerBadge}>
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: '#1f0038',
    color: 'white',
    padding: '6rem 1.5rem',
    fontFamily: `'Kumbh Sans', sans-serif`,
    textAlign: 'center',
  },
  header: {
    maxWidth: '700px',
    margin: '0 auto 4rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: '800',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.85,
    color: '#eee',
  },
  testimonialSlider: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    gap: '2rem',
    padding: '1rem',
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none',        // Firefox
    msOverflowStyle: 'none',       // IE/Edge
  },
  testimonialCard: {
    flex: '0 0 90%',
    maxWidth: '600px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #3e1c64, #4a1560)',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    scrollSnapAlign: 'start',
    textAlign: 'left',
  },
  quote: {
    fontSize: '1.25rem',
    fontStyle: 'italic',
    marginBottom: '1rem',
  },
  author: {
    fontSize: '0.95rem',
    color: '#ccc',
  },
  marqueeWrapper: {
    marginTop: '6rem',
  },
  partnerTitle: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  marquee: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  marqueeContent: {
    display: 'inline-block',
    animation: 'scrollMarquee 20s linear infinite',
  },
  partnerBadge: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.08)',
    padding: '0.8rem 1.5rem',
    margin: '0 1rem',
    borderRadius: '30px',
    fontWeight: 'bold',
    color: '#e0f7fa',
    fontSize: '1rem',
    border: '1px solid rgba(255,255,255,0.2)',
  },
};

// Add marquee animation keyframes
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes scrollMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
[data-testimonial-slider]::-webkit-scrollbar {
  display: none;
}
`;
document.head.appendChild(styleTag);

export default Clients;
