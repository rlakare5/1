
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState('can');
  const [showProductOptions, setShowProductOptions] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickEffect, setClickEffect] = useState({ show: false, x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [particleAnimation, setParticleAnimation] = useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const productData = {
    can: {
      title: "ChillFizz Can",
      description: "ChillFizz is not just a cold drink — it's a sensation. Made with real fruit extracts, zero artificial nonsense, and a fizz that brings instant refreshment. We're on a mission to add sparkle to every sip.",
      highlight: "🌟 Available in over 20 countries and loved by millions! 🌟",
      image: "/attached_assets/1_1750068064776.png",
      stats: [
        { number: "100%", label: "Natural", message: "100% Natural ingredients - no artificial additives!" },
        { number: "50M+", label: "Customers", message: "Over 50 million happy customers worldwide!" },
        { number: "25+", label: "Countries", message: "Available in 25+ countries and growing!" }
      ],
      gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6b35 50%, #f7931e 100%)",
      textColor: "#2c3e50",
      accentColor: "#e74c3c"
    },
    bottle: {
      title: "ChillFizz Bottle",
      description: "ChillFizz is not just a cold drink — it's a sensation. Made with real fruit extracts, zero artificial nonsense, and a fizz that brings instant refreshment. We're on a mission to add sparkle to every sip.",
      highlight: "🌟 Available in over 20 countries and loved by millions! 🌟",
      image: "/attached_assets/2_1750068064780.png",
      stats: [
        { number: "100%", label: "NATURAL", message: "100% Natural ingredients - no artificial additives!" },
        { number: "50M+", label: "CUSTOMERS", message: "Over 50 million happy customers worldwide!" },
        { number: "25+", label: "COUNTRIES", message: "Available in 25+ countries and growing!" }
      ],
      gradient: "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 25%, #a5d6a7 50%, #81c784 75%, #66bb6a 100%)",
      textColor: "#2c3e50",
      accentColor: "#2e7d32"
    },
    water: {
      title: "ChillFizz Water",
      description: "ChillFizz is not just a cold drink — it's a sensation. Made with real fruit extracts, zero artificial nonsense, and a fizz that brings instant refreshment. We're on a mission to add sparkle to every sip.",
      highlight: "🌟 Available in over 20 countries and loved by millions! 🌟",
      image: "/attached_assets/3_1750068064781.png",
      stats: [
        { number: "100%", label: "NATURAL", message: "100% Natural ingredients - no artificial additives!" },
        { number: "50M+", label: "CUSTOMERS", message: "Over 50 million happy customers worldwide!" },
        { number: "25+", label: "COUNTRIES", message: "Available in 25+ countries and growing!" }
      ],
      gradient: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 25%, #90caf9 50%, #64b5f6 75%, #42a5f5 100%)",
      textColor: "#2c3e50",
      accentColor: "#1565c0"
    }
  };

  const handleProductChange = (product) => {
    if (product === selectedProduct) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedProduct(product);
      setIsAnimating(false);
      setShowProductOptions(false);
    }, 300);
  };

  const handleImageClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create ripple effect
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);

    // Show click effect
    setClickEffect({ show: true, x, y });
    setTimeout(() => setClickEffect({ show: false, x: 0, y: 0 }), 600);
    
    setShowProductOptions(!showProductOptions);
  };

  const handleStatClick = (stat, index, e) => {
    // Create floating text effect
    const rect = e.currentTarget.getBoundingClientRect();
    const floatingText = document.createElement('div');
    floatingText.textContent = stat.message;
    floatingText.style.cssText = `
      position: fixed;
      left: ${rect.left}px;
      top: ${rect.top - 20}px;
      z-index: 1000;
      background: linear-gradient(45deg, ${currentProduct.accentColor}, ${currentProduct.textColor});
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      pointer-events: none;
      animation: floatUp 2s ease-out forwards;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(floatingText);
    setTimeout(() => document.body.removeChild(floatingText), 2000);
  };

  const currentProduct = productData[selectedProduct];

  return (
    <section style={{...styles.section, background: currentProduct.gradient}}>
      <div style={styles.container}>
        <div style={styles.textContent} data-aos="fade-right">
          <h2 style={{
            ...styles.heading,
            color: currentProduct.textColor,
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? 'translateX(-20px)' : 'translateX(0)',
            transition: 'all 0.3s ease'
          }}>
            About {currentProduct.title}
          </h2>
          <div style={{
            ...styles.decorativeLine,
            background: `linear-gradient(90deg, ${currentProduct.accentColor}, ${currentProduct.textColor})`
          }} data-aos="slide-right" data-aos-delay="200"></div>
          <p style={{
            ...styles.description,
            color: currentProduct.textColor,
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? 'translateX(-20px)' : 'translateX(0)',
            transition: 'all 0.3s ease 0.1s'
          }} data-aos="fade-up" data-aos-delay="300">
            {currentProduct.description}
          </p>
          <p style={{
            ...styles.highlight,
            color: currentProduct.accentColor,
            background: `rgba(${currentProduct.accentColor === '#e74c3c' ? '231, 76, 60' : 
                                currentProduct.accentColor === '#2e7d32' ? '46, 125, 50' : 
                                '21, 101, 192'}, 0.1)`,
            border: `2px solid rgba(${currentProduct.accentColor === '#e74c3c' ? '231, 76, 60' : 
                                   currentProduct.accentColor === '#2e7d32' ? '46, 125, 50' : 
                                   '21, 101, 192'}, 0.3)`,
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? 'scale(0.9)' : 'scale(1)',
            transition: 'all 0.3s ease 0.2s'
          }} data-aos="bounce-in" data-aos-delay="500">
            {currentProduct.highlight}
          </p>
          <div style={styles.stats} data-aos="fade-up" data-aos-delay="600">
            {currentProduct.stats.map((stat, index) => (
              <div 
                key={index}
                style={{
                  ...styles.statItem,
                  ...(hoveredStat === index ? {
                    ...styles.statItemHover,
                    boxShadow: `0 15px 35px rgba(${currentProduct.accentColor === '#e74c3c' ? '231, 76, 60' : 
                                                   currentProduct.accentColor === '#2e7d32' ? '46, 125, 50' : 
                                                   '21, 101, 192'}, 0.4)`,
                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))`,
                    transform: 'translateY(-8px) scale(1.08) rotateY(5deg)',
                    borderLeft: `4px solid ${currentProduct.accentColor}`
                  } : {}),
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? 'translateY(20px)' : hoveredStat === index ? 'translateY(-8px) scale(1.08) rotateY(5deg)' : 'translateY(0)',
                  transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${0.3 + index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                onClick={(e) => handleStatClick(stat, index, e)}
              >
                <span style={{
                  ...styles.statNumber,
                  color: currentProduct.accentColor
                }}>{stat.number}</span>
                <span style={{
                  ...styles.statLabel,
                  color: currentProduct.textColor
                }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.imageWrapper} data-aos="fade-left" data-aos-delay="400">
          <div style={styles.imageContainer}>
            <img
              src={currentProduct.image}
              alt={`${currentProduct.title}`}
              style={{
                ...styles.image,
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'scale(0.8) rotateY(-20deg)' : 
                          isImageHovered ? 'scale(1.05) rotateY(5deg) rotateX(-5deg)' : 
                          'scale(1) rotateY(-10deg)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                filter: isImageHovered ? 'brightness(1.15) saturate(1.2) drop-shadow(0 15px 35px rgba(0,0,0,0.3))' : 
                        'brightness(1.05) saturate(1.1)',
                boxShadow: isImageHovered ? 
                  `0 35px 70px rgba(0, 0, 0, 0.35), 0 15px 30px ${currentProduct.accentColor}40` :
                  '0 25px 50px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(52, 152, 219, 0.15)'
              }}
              onClick={handleImageClick}
              onMouseEnter={() => {
                setIsImageHovered(true);
                setParticleAnimation(true);
              }}
              onMouseLeave={() => {
                setIsImageHovered(false);
                setParticleAnimation(false);
              }}
            />
            
            {/* Click Effect */}
            {clickEffect.show && (
              <div style={{
                ...styles.clickEffect,
                left: clickEffect.x,
                top: clickEffect.y,
                background: currentProduct.accentColor
              }}></div>
            )}
            
            {/* Ripple Effects */}
            {ripples.map(ripple => (
              <div
                key={ripple.id}
                style={{
                  ...styles.ripple,
                  left: ripple.x,
                  top: ripple.y,
                  border: `2px solid ${currentProduct.accentColor}`
                }}
              ></div>
            ))}

            <div style={styles.floatingElement1} data-aos="float" data-aos-delay="800">✨</div>
            <div style={styles.floatingElement2} data-aos="float" data-aos-delay="1000">
              {selectedProduct === 'can' && '🥤'}
              {selectedProduct === 'bottle' && '🍾'}
              {selectedProduct === 'water' && '💧'}
            </div>
            
            {/* Enhanced floating particles */}
            <div style={styles.particleContainer}>
              <div style={{
                ...styles.particle,
                ...styles.particle1,
                background: `linear-gradient(45deg, rgba(255, 255, 255, 0.8), ${currentProduct.accentColor}40)`,
                animation: particleAnimation ? 'twinkle 2s ease-in-out infinite' : 'float 6s ease-in-out infinite',
                transform: isImageHovered ? 'scale(1.5)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}></div>
              <div style={{
                ...styles.particle,
                ...styles.particle2,
                background: `linear-gradient(45deg, ${currentProduct.accentColor}60, rgba(255, 255, 255, 0.6))`,
                animation: particleAnimation ? 'sparkle 1.5s ease-in-out infinite 0.5s' : 'float 5s ease-in-out infinite 1s',
                transform: isImageHovered ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}></div>
              <div style={{
                ...styles.particle,
                ...styles.particle3,
                background: `radial-gradient(circle, ${currentProduct.accentColor}80, transparent)`,
                animation: particleAnimation ? 'pulse 1s ease-in-out infinite' : 'float 6s ease-in-out infinite 2s',
                transform: isImageHovered ? 'scale(1.4)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}></div>
              <div style={{
                ...styles.particle,
                ...styles.particle4,
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.9), ${currentProduct.accentColor}50)`,
                animation: particleAnimation ? 'twinkle 1.8s ease-in-out infinite 1s' : 'float 4.5s ease-in-out infinite 3s',
                transform: isImageHovered ? 'scale(1.6)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}></div>
              
              {/* Additional interactive particles */}
              {isImageHovered && (
                <>
                  <div style={{
                    ...styles.particle,
                    width: '4px',
                    height: '4px',
                    top: '30%',
                    left: '5%',
                    background: `radial-gradient(circle, ${currentProduct.accentColor}, transparent)`,
                    animation: 'sparkle 1s ease-in-out infinite'
                  }}></div>
                  <div style={{
                    ...styles.particle,
                    width: '6px',
                    height: '6px',
                    top: '70%',
                    right: '10%',
                    background: `linear-gradient(45deg, rgba(255, 255, 255, 0.9), ${currentProduct.accentColor}70)`,
                    animation: 'twinkle 1.2s ease-in-out infinite 0.3s'
                  }}></div>
                </>
              )}
            </div>
          </div>

          {/* Enhanced Product Options */}
          <div style={{
            ...styles.productOptions,
            background: `linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))`,
            border: `2px solid ${currentProduct.accentColor}60`,
            backdropFilter: 'blur(25px)',
            opacity: showProductOptions ? 1 : 0,
            transform: showProductOptions ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
            visibility: showProductOptions ? 'visible' : 'hidden'
          }}>
            <div style={{
              ...styles.optionsHeader,
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: `2px 2px 4px ${currentProduct.accentColor}80`
            }}>Choose Your ChillFizz</div>
            <div style={styles.optionsGrid}>
              {Object.entries(productData).map(([key, product]) => (
                <div
                  key={key}
                  style={{
                    ...styles.optionCard,
                    background: selectedProduct === key 
                      ? `linear-gradient(145deg, ${product.accentColor}25, ${product.accentColor}35)`
                      : `linear-gradient(145deg, ${product.accentColor}08, ${product.accentColor}12)`,
                    border: selectedProduct === key 
                      ? `2px solid ${product.accentColor}`
                      : `2px solid ${product.accentColor}40`,
                    transform: selectedProduct === key 
                      ? 'scale(1.08) translateY(-3px)' 
                      : 'scale(1)',
                    boxShadow: selectedProduct === key 
                      ? `0 10px 25px ${product.accentColor}50`
                      : '0 4px 15px rgba(0,0,0,0.1)',
                    animationDelay: `${Object.keys(productData).indexOf(key) * 0.1}s`
                  }}
                  onClick={() => handleProductChange(key)}
                >
                  <div style={styles.optionIcon}>
                    {key === 'can' && '🥤'}
                    {key === 'bottle' && '🍾'}
                    {key === 'water' && '💧'}
                  </div>
                  <span style={{
                    ...styles.optionLabel,
                    color: selectedProduct === key ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
                    textShadow: selectedProduct === key ? `1px 1px 2px ${product.accentColor}` : 'none'
                  }}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    scrollSnapAlign: 'start',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background 0.5s ease',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    width: '100%',
    gap: '3rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    flex: '1 1 500px',
    position: 'relative',
  },
  heading: {
    fontSize: '3rem',
    fontFamily: 'Kumbh Sans, sans-serif',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    fontWeight: '700',
  },
  decorativeLine: {
    width: '80px',
    height: '4px',
    marginBottom: '2rem',
    borderRadius: '2px',
  },
  description: {
    fontSize: '1.2rem',
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: '1.8',
    marginBottom: '2rem',
    fontWeight: '500',
  },
  highlight: {
    marginTop: '1rem',
    fontWeight: '700',
    fontSize: '1.3rem',
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
    gap: '1rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    minWidth: '100px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  statItemHover: {
    transform: 'translateY(-5px) scale(1.05)',
    background: 'rgba(255, 255, 255, 0.95)',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
  },
  imageWrapper: {
    flex: '1 1 400px',
    textAlign: 'center',
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  image: {
    width: '100%',
    maxWidth: '220px',
    borderRadius: '2rem',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(52, 152, 219, 0.15)',
    transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    filter: 'brightness(1.05) saturate(1.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  clickEffect: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'clickExpand 0.6s ease-out forwards',
    pointerEvents: 'none',
    zIndex: 10,
  },
  ripple: {
    position: 'absolute',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'rippleEffect 1s ease-out forwards',
    pointerEvents: 'none',
    zIndex: 9,
  },
  floatingElement1: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '2rem',
    animation: 'float 3s ease-in-out infinite',
  },
  floatingElement2: {
    position: 'absolute',
    bottom: '30px',
    left: '20px',
    fontSize: '2rem',
    animation: 'float 3s ease-in-out infinite 1.5s',
  },
  particleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite',
  },
  particle1: {
    width: '8px',
    height: '8px',
    top: '20%',
    left: '10%',
    animationDelay: '0s',
    animationDuration: '4s',
  },
  particle2: {
    width: '12px',
    height: '12px',
    top: '60%',
    right: '15%',
    animationDelay: '1s',
    animationDuration: '5s',
  },
  particle3: {
    width: '6px',
    height: '6px',
    top: '80%',
    left: '20%',
    animationDelay: '2s',
    animationDuration: '6s',
  },
  particle4: {
    width: '10px',
    height: '10px',
    top: '40%',
    right: '25%',
    animationDelay: '3s',
    animationDuration: '4.5s',
  },
  productOptions: {
    position: 'absolute',
    bottom: '-130px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '25px',
    padding: '25px',
    boxShadow: '0 25px 80px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)',
    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    zIndex: 10,
    minWidth: '320px',
  },
  optionsHeader: {
    fontSize: '1.1rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '15px',
    fontFamily: 'Kumbh Sans, sans-serif',
  },
  optionsGrid: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  optionCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '18px 22px',
    borderRadius: '18px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    animation: 'slideIn 0.6s ease forwards',
    position: 'relative',
    overflow: 'hidden',
  },
  optionIcon: {
    fontSize: '2rem',
    marginBottom: '8px',
  },
  optionLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
};

export default About;
