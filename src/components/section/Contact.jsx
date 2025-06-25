// src/components/section/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at center, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        padding: '4rem 2rem',
        overflow: 'hidden',
        color: 'white',
        fontFamily: 'Kumbh Sans, sans-serif'
      }}
    >
      {/* Glowing Bottle Background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '180px',
        height: '400px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0))',
        borderRadius: '60% 60% 15% 15% / 35% 35% 10% 10%',
        filter: 'blur(10px)',
        boxShadow: '0 0 60px rgba(255,255,255,0.2)',
        zIndex: 0,
        animation: 'pulseGlow 5s infinite ease-in-out'
      }} />

      {/* Fizz Particles */}
      {Array.from({ length: 25 }).map((_, i) => {
  const size = Math.random() * 8 + 4;
  const blur = Math.random() < 0.5 ? '1px' : '2px';
  const glowColor = ['#ffffff', '#fcd34d', '#ffedd5'][Math.floor(Math.random() * 3)];

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 300 }}
      animate={{
        opacity: [0, 0.9, 0],
        y: [-50, -300, -650],
        x: [0, (Math.random() - 0.5) * 60, 0],
        scale: [1, 1.05, 0.95, 1] // subtle scaling pulse
      }}
      transition={{
        duration: 7 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: 'easeInOut'
      }}
      style={{
        position: 'absolute',
        left: `${Math.random() * 100}%`,
        bottom: 0,
        width: `${size}px`,
        height: `${size}px`,
        background: glowColor,
        borderRadius: '50%',
        opacity: 0.2 + Math.random() * 0.2,
        zIndex: 0,
        filter: `blur(${blur}) drop-shadow(0 0 6px ${glowColor})`,
        pointerEvents: 'none'
      }}
    />
  );
})}



      {/* Pulse Animation */}
      <style>{`
        @keyframes pulseGlow {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
        }
      `}</style>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', textAlign: 'center', marginBottom: '2rem' }}>
          Get in Touch with ChillFizz!✨
        </h2>

        <div style={{
          display: 'grid',
          gap: '2.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'rgba(255,255,255,0.08)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(15px)',
              position: 'relative'
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <input
                type="text"
                placeholder="👤 Your Name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setFeedback(`Hey ${e.target.value}, nice to meet you!`);
                }}
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="📧 Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
              <textarea
                rows="5"
                placeholder="💬 Your Message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  setFeedback(e.target.value.length > 20 ? '🚀 Message looks great!' : '');
                }}
                style={inputStyle}
              />

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #ffeb3b, #f87171)',
                  borderRadius: '0.75rem',
                  fontWeight: 'bold',
                  border: 'none',
                  color: '#1e1e1e',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Send Signal 📡
              </motion.button>
            </form>

            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '1rem',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '0.8rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.95rem'
                }}
              >
                {feedback}
              </motion.div>
            )}

            {formData.message.length > 10 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  textAlign: 'center',
                  marginTop: '1rem',
                  fontSize: '1rem',
                  color: '#fcd34d',
                  fontWeight: '600',
                  fontFamily: `'Courier New', monospace`
                }}
              >
                “Fuel your fizz. Feel the chill.” 💫
              </motion.div>
            )}
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(255,255,255,0.05))',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              textAlign: 'left'
            }}
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              ChillFizz HQ
            </h3>
            <p style={infoStyle}>📍Andheri east, Mumbai</p>
            <p style={infoStyle}>📞 +91 9876543210</p>
            <p style={infoStyle}>✉️ hello@chillfizz.com</p>
            <p style={{ ...infoStyle, marginTop: '1rem' }}>
              We reply within <strong>24 hours</strong> 🚀
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: '1rem',
  background: 'rgba(255,255,255,0.1)',
  borderRadius: '0.75rem',
  color: 'white',
  border: 'none',
  outline: 'none',
  fontSize: '1rem'
};

const infoStyle = {
  marginBottom: '1rem',
  fontSize: '1rem',
  opacity: 0.9
};
