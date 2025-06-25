import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={styles.nav}>
      {['home', 'about', 'blog', 'clients', 'services', 'contact'].map((section) => (
        <button key={section} onClick={() => scrollToSection(section)} style={styles.button}>
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: '#222',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    zIndex: 1000,
  },
  button: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Navbar;
