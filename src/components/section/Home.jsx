
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);
  const [clickCount, setClickCount] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = React.useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      once: true,
      offset: 50
    });
  }, []);

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
    setShowModal(true);
    setTimeout(() => {
      setShowWelcomePopup(true);
    }, 1000);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowWelcomePopup(false);
    // Scroll to about section after closing modal
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <section style={styles.container}>
      <div style={styles.backgroundPattern}></div>
      <div style={styles.content}>
        <div style={styles.titleContainer} data-aos="zoom-in">
          <h1 style={styles.title}>ChillFizz</h1>
          <div style={styles.titleUnderline} data-aos="slide-right" data-aos-delay="300"></div>
        </div>
        
        <p style={styles.subtitle} data-aos="fade-up" data-aos-delay="400">
          Refreshing your world, one fizz at a time.
        </p>
        
        <div style={styles.taglineContainer} data-aos="fade-up" data-aos-delay="600">
          <p style={styles.tagline}>🥤 Premium • Natural • Energizing • Global</p>
        </div>
        
        <div style={styles.stats} data-aos="fade-up" data-aos-delay="800">
          <div style={styles.stat} data-aos="flip-up" data-aos-delay="900">
            <h3 style={styles.statNumber}>500+</h3>
            <p style={styles.statLabel}>Happy Customers</p>
          </div>
          <div style={styles.stat} data-aos="flip-up" data-aos-delay="1000">
            <h3 style={styles.statNumber}>7+</h3>
            <p style={styles.statLabel}>States</p>
          </div>
          <div style={styles.stat} data-aos="flip-up" data-aos-delay="1100">
            <h3 style={styles.statNumber}>100%</h3>
            <p style={styles.statLabel}>Natural</p>
          </div>
        </div>
        
        <div style={styles.buttonContainer} data-aos="bounce-in" data-aos-delay="1200">
          <button 
            style={{
              ...styles.button,
              ...(isButtonHovered ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={handleButtonClick}
          >
            <span style={styles.buttonText}>
              {clickCount > 0 ? `Explore More ` : 'Explore More'}
            </span>
            <span style={{
              ...styles.buttonIcon,
              transform: isButtonHovered ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.3s ease'
            }}>→</span>
          </button>
        </div>
        
<div style={styles.floatingElements}>
  <div style={styles.bubble1} data-aos="fade-in" data-aos-delay="1500">💧</div>
  <div style={styles.bubble2} data-aos="fade-in" data-aos-delay="1700">✨</div>
  <div style={styles.bubble3} data-aos="fade-in" data-aos-delay="1900">🌟</div>
  <div style={styles.bubble4} data-aos="fade-in" data-aos-delay="2100">🍋</div>
  <div style={styles.bubble5} data-aos="fade-in" data-aos-delay="2300">🧊</div>
  <div style={styles.bubble6} data-aos="fade-in" data-aos-delay="2500">💥</div>
</div>

      </div>

      {/* Interactive Modal */}
      {showModal && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>🎉 Welcome to ChillFizz Adventure!</h2>
              <button style={styles.closeButton} onClick={closeModal}>✕</button>
            </div>
            <div style={styles.modalBody}>
              <div style={styles.modalGrid}>
                <div style={styles.modalCard}>
                  <span style={styles.modalIcon}>🥤</span>
                  <h3>Premium Flavors</h3>
                  <p>Discover our signature collection of natural fruit flavors</p>
                </div>
                <div style={styles.modalCard}>
                  <span style={styles.modalIcon}>🌍</span>
                  <h3>Global Reach</h3>
                  <p>Available in 25+ countries and expanding worldwide</p>
                </div>
                <div style={styles.modalCard}>
                  <span style={styles.modalIcon}>💎</span>
                  <h3>100% Natural</h3>
                  <p>No artificial colors, flavors, or preservatives</p>
                </div>
                <div style={styles.modalCard}>
                  <span style={styles.modalIcon}>⚡</span>
                  <h3>Energy Boost</h3>
                  <p>Natural caffeine from green tea extracts</p>
                </div>
              </div>
              <div style={styles.modalActions}>
                <button style={styles.modalActionButton} onClick={() => alert('🎁 Special Offer: 20% off your first order!')}>
                  Get Special Offer
                </button>
                <button style={styles.modalSecondaryButton} onClick={closeModal}>
                  Continue Exploring
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Popup */}
      {showWelcomePopup && (
        <div style={styles.welcomePopup}>
          <div style={styles.popupContent}>
            <span style={styles.popupIcon}>🎊</span>
            <p style={styles.popupText}>Thanks for exploring! Enjoy your ChillFizz journey!</p>
            <button style={styles.popupClose} onClick={() => setShowWelcomePopup(false)}>Got it!</button>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    //background: 'linear-gradient(145deg, #1e1e1e, #292929, #141414)',
    //background: 'linear-gradient(145deg, #ff6ec4, #7873f5, #4ade80)',
    //background: 'linear-gradient(135deg, #ffb347 0%, #ff0844 100%)',
    //background: 'linear-gradient(135deg, #fcd34d 0%, #fb923c 50%, #ef4444 100%)',

    background: 'linear-gradient(135deg, #fca311 0%, #e63946 100%)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                 radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                 radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
    animation: 'pulse 4s ease-in-out infinite',
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '4rem',
    fontFamily: 'Kumbh Sans, sans-serif',
    fontWeight: '900',
    textShadow: '0 5px 15px rgba(0,0,0,0.3)',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #fff, #f0f8ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  titleUnderline: {
    width: '200px',
    height: '4px',
    background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: '2rem',
    opacity: '0.9',
    fontWeight: '300',
  },
  taglineContainer: {
    marginBottom: '3rem',
  },
  tagline: {
    fontSize: '1.2rem',
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '1rem 2rem',
    borderRadius: '50px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    display: 'inline-block',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  stat: {
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '2rem 1.5rem',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    minWidth: '150px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0 0 0.5rem 0',
    color: '#fff',
  },
  statLabel: {
    fontSize: '1rem',
    margin: 0,
    opacity: '0.8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  buttonContainer: {
    marginBottom: '2rem',
  },
  button: {
    background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
    border: 'none',
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    margin: '0 auto',
  },
  buttonHover: {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
    background: 'linear-gradient(45deg, #ee5a24, #ff6b6b)',
  },
  buttonText: {
    fontFamily: 'Montserrat, sans-serif',
  },
  buttonIcon: {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease',
  },
  floatingElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  bubble1: {
    position: 'absolute',
    top: '15%',
    left: '10%',
    fontSize: '3rem',
    animation: 'float 6s ease-in-out infinite',
  },
  bubble2: {
    position: 'absolute',
    top: '50%',
    right: '0%',
    fontSize: '2.5rem',
    animation: 'float 6s ease-in-out infinite 2s',
  },
  bubble3: {
    position: 'absolute',
    bottom: '10%',
    left: '20%',
    fontSize: '2rem',
    animation: 'float 6s ease-in-out infinite 4s',
  },
  bubble4: {
  position: 'absolute',
  top: '10%',
  right: '10%',
  fontSize: '2.8rem',
  animation: 'float 7s ease-in-out infinite 1s',
},
bubble5: {
  position: 'absolute',
  bottom: '10%',
  right: '5%',
  fontSize: '3.2rem',
  animation: 'float 6s ease-in-out infinite 2.5s',
},
bubble6: {
  position: 'absolute',
  bottom: '45%',
  left: '0%',
  fontSize: '2.5rem',
  animation: 'float 7s ease-in-out infinite 3.5s',
},

  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.3s ease',
  },
  modalContent: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '25px',
    padding: '0',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '80vh',
    overflow: 'hidden',
    animation: 'slideIn 0.5s ease',
    border: '3px solid rgba(255, 255, 255, 0.3)',
  },
  modalHeader: {
    padding: '2rem',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    color: 'white',
    fontSize: '1.8rem',
    fontFamily: 'Kumbh Sans, sans-serif',
    fontWeight: '700',
    margin: 0,
  },
  closeButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  modalBody: {
    padding: '2rem',
    color: 'white',
  },
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  modalCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '1.5rem',
    borderRadius: '15px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease',
  },
  modalIcon: {
    fontSize: '2.5rem',
    display: 'block',
    marginBottom: '1rem',
  },
  modalActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  modalActionButton: {
    background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '50px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  modalSecondaryButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '1rem 2rem',
    borderRadius: '50px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  // Welcome Popup Styles
  welcomePopup: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1001,
    animation: 'bounceIn 0.6s ease',
  },
  popupContent: {
    background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
    padding: '1.5rem',
    borderRadius: '20px',
    color: 'white',
    textAlign: 'center',
    border: '3px solid rgba(255, 255, 255, 0.3)',
    minWidth: '250px',
  },
  popupIcon: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '0.5rem',
  },
  popupText: {
    margin: '0 0 1rem 0',
    fontFamily: 'Montserrat, sans-serif',
  },
  popupClose: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Home;
