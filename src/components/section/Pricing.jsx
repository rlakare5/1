// src/components/section/Pricing.jsx
import React from 'react';

const Pricing = () => (
  <section style={styles}>
    <h1>Pricing Plans</h1>
    <p style={styles.subtitle}>Affordable fizz for everyone — check out our plans.</p>

    <div style={styles.pricingGrid}>
      <div style={styles.priceCard}>
        <h3>Single Pack</h3>
        <div style={styles.price}>₹100</div>
        <ul style={styles.features}>
          <li>✓ 1 Bottle (500ml)</li>
          <li>✓ Choose Any Flavor</li>
          <li>✓ Perfect for Trying</li>
        </ul>
      </div>

      <div style={styles.priceCardPopular}>
        <div style={styles.popular}>Most Popular</div>
        <h3>Party Pack</h3>
        <div style={styles.price}>₹1099</div>
        <ul style={styles.features}>
          <li>✓ 12 Bottles (500ml each)</li>
          <li>✓ Mix & Match Flavors</li>
          <li>✓ Free Cooler Bag</li>
          <li>✓ 15% Savings</li>
        </ul>
      </div>

      <div style={styles.priceCard}>
        <h3>Bulk Order</h3>
        <div style={styles.price}>₹8999</div>
        <ul style={styles.features}>
          <li>✓ 100 Bottles</li>
          <li>✓ Business Discount</li>
          <li>✓ Free Delivery</li>
          <li>✓ Custom Labels Available</li>
        </ul>
      </div>
    </div>
  </section>
);

const styles = {
  minHeight: '100vh',
  padding: '4rem',
    //background: 'linear-gradient(145deg, #1e1e1e, #292929, #141414)',
  backgroundColor: '#4caf50',
  color: 'white',
  textAlign: 'center',
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '3rem',
    opacity: '0.9',
  },
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    marginTop: '3rem',
  },
  priceCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '2rem',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'relative',
  },
  priceCardPopular: {
    background: 'rgba(255, 255, 255, 0.2)',
    padding: '2rem',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '2px solid #fff',
    position: 'relative',
    transform: 'scale(1.05)',
  },
  popular: {
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff',
    color: '#4caf50',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  price: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '1rem 0',
  },
  features: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
  },
};

export default Pricing;