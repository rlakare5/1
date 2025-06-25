import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const services = [
    {
      icon: '🎉',
      title: 'Event Partnerships',
      desc: 'Custom branding and bulk supply for corporate events, festivals, and celebrations.',
      badge: 'Custom',
      delay: 200,
      alert: 'Event Partnerships: Make your events fizz with excitement!',
      color: '#FF3D77'
    },
    {
      icon: '🏪',
      title: 'Retail Solutions',
      desc: 'Complete merchandising support with coolers, displays, and marketing materials.',
      badge: 'Complete',
      delay: 400,
      alert: 'Retail Solutions: Everything you need to sell ChillFizz!',
      color: '#FF9E0D'
    },
    {
      icon: '📱',
      title: 'Mobile App',
      desc: 'Track orders, find nearby stores, and unlock exclusive flavors through our app.',
      badge: 'Digital',
      delay: 600,
      alert: 'Mobile App: Download now for exclusive rewards!',
      color: '#00E5FF'
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.bubbleBackground}></div>

      <div style={styles.contentWrapper}>
        <div style={styles.header} data-aos="fade-down">
          <h1 style={styles.title}>Our Services</h1>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            We go beyond fizz — from smart tech to event vibes and retail magic.
          </p>
        </div>

        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.serviceCard,
                '--card-color': service.color,
                transform: hoveredCard === index ? 'translateY(-10px)' : 'none',
                borderColor: hoveredCard === index ? service.color : 'rgba(255,255,255,0.2)'
              }}
              data-aos="zoom-in-up"
              data-aos-delay={service.delay}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                const modal = document.createElement('div');
                modal.style.cssText = `
                  position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background: rgba(255,255,255,0.95);
                  color: #333;
                  padding: 2rem;
                  border-radius: 16px;
                  max-width: 80%;
                  text-align: center;
                  z-index: 1000;
                  border: 1px solid ${service.color};
                  box-shadow: 0 5px 30px rgba(0,0,0,0.2);
                `;
                modal.innerHTML = `
                  <div style="font-size: 3rem; margin-bottom: 1rem; color: ${service.color}">${service.icon}</div>
                  <h3 style="margin: 0 0 1rem 0; font-size: 1.5rem;">${service.alert}</h3>
                  <button style="
                    background: ${service.color};
                    color: white;
                    border: none;
                    padding: 0.5rem 1.5rem;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: bold;
                    margin-top: 1rem;
                    transition: all 0.3s;
                  " onmouseover="this.style.transform='scale(1.05)'" 
                  onmouseout="this.style.transform='scale(1)'"
                  onclick="this.parentNode.remove()">Got it!</button>
                `;
                document.body.appendChild(modal);
              }}
            >
              <div style={styles.iconWrapper}>
                <span style={{...styles.icon, color: service.color}}>{service.icon}</span>
              </div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDescription}>{service.desc}</p>
              <div style={styles.cardFooter}>
                <span style={{...styles.cardBadge, backgroundColor: service.color}}>
                  {service.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.callToAction} data-aos="zoom-in" data-aos-delay="900">
          <h3 style={styles.ctaTitle}>Ready to Ignite Your Brand with ChillFizz?</h3>
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    padding: '6rem 2rem',
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #4a6b6a)',
   background: 'linear-gradient(135deg, #0a2463, #3e92cc, #d6e3f8)'  ,
  },
  bubbleBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    overflow: 'hidden',
    background: 'transparent',
    pointerEvents: 'none',
    animation: 'riseBubbles 20s infinite linear'
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    marginBottom: '5rem'
  },
  title: {
    fontSize: '3rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#fff'
  },
  titleUnderline: {
    width: '80px',
    height: '4px',
    background: '#00E5FF',
    margin: '0 auto 2rem auto',
    borderRadius: '2px'
  },
  subtitle: {
    fontSize: '1.2rem',
    fontFamily: 'Open Sans, sans-serif',
    color: '#ddd',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1100px',
    margin: '0 auto 5rem auto'
  },
  serviceCard: {
    background: 'rgba(255,255,255,0.1)',
    padding: '2.5rem 2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.2)',
    textAlign: 'center',
    backdropFilter: 'blur(8px)'
  },
  iconWrapper: {
    width: '80px',
    height: '80px',
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem auto',
    fontSize: '2.5rem'
  },
  icon: {
    transition: 'all 0.3s ease',
    display: 'inline-block'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  cardDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#eee',
    fontFamily: 'Open Sans, sans-serif',
    marginBottom: '2rem'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardBadge: {
    color: 'white',
    padding: '0.5rem 1.2rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  callToAction: {
    background: 'rgba(255,255,255,0.05)',
    padding: '3rem',
    borderRadius: '16px',
    maxWidth: '800px',
    margin: '0 auto',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)'
  },
  ctaTitle: {
    fontSize: '1.8rem',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '2rem',
    fontWeight: '600',
    color: '#fff'
  },
  ctaButton: {
    background: 'linear-gradient(45deg, #00E5FF, #0075FF)',
    color: 'white',
    border: 'none',
    padding: '1rem 3rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    fontFamily: 'Open Sans, sans-serif'
  }
};

export default Services;