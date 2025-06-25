// // src/components/section/Blog.jsx
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const blogPosts = [
//   {
//     title: "🌱 The Science Behind the Fizz",
//     date: "December 15, 2024",
//     description:
//       "Discover how we create that perfect carbonation level that makes ChillFizz so refreshing and unique.",
//   },
//   {
//     title: "🌍 Going Global: Our Journey",
//     date: "December 10, 2024",
//     description:
//       "From a small startup to 25 countries - read about our incredible expansion story and what's next.",
//   },
//   {
//     title: "🎨 New Flavor Alert: Tropical Mango",
//     date: "December 5, 2024",
//     description:
//       "Get ready for summer with our newest tropical flavor that's taking the world by storm!",
//   },
//   {
//     title: "♻️ Sustainability Matters",
//     date: "November 28, 2024",
//     description:
//       "Our commitment to eco-friendly packaging and how we're reducing our carbon footprint.",
//   },
// ];

// const Blog = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   return (
//     <section style={styles.section}>
//       <h1 style={styles.heading}>📰 ChillFizz Blog</h1>
//       <p style={styles.subtitle}>
//         Dive into our latest stories, flavors, and fizz-filled updates.
//       </p>

//       <div style={styles.blogGrid}>
//         {blogPosts.map((post, idx) => (
//           <article
//             key={idx}
//             style={styles.blogCard}
//             data-aos="fade-up"
//             data-aos-delay={idx * 150}
//           >
//             <h3 style={styles.cardTitle}>{post.title}</h3>
//             <p style={styles.date}>{post.date}</p>
//             <p style={styles.description}>{post.description}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     minHeight: '100vh',
//     padding: '5rem 2rem',
//     background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
//     color: '#fff',
//     textAlign: 'center',
//     fontFamily: `'Montserrat', sans-serif`,
//   },
//   heading: {
//     fontSize: '2.8rem',
//     marginBottom: '1rem',
//     letterSpacing: '1px',
//   },
//   subtitle: {
//     fontSize: '1.2rem',
//     maxWidth: '600px',
//     margin: '0 auto',
//     opacity: 0.85,
//   },
//   blogGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '2.5rem',
//     maxWidth: '1200px',
//     margin: '3rem auto 0',
//   },
//   blogCard: {
//     background: 'rgba(255, 255, 255, 0.07)',
//     padding: '2rem',
//     borderRadius: '20px',
//     border: '1px solid rgba(255, 255, 255, 0.15)',
//     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
//     backdropFilter: 'blur(12px)',
//     textAlign: 'left',
//     transition: 'all 0.3s ease-in-out',
//     cursor: 'pointer',
//   },
//   cardTitle: {
//     fontSize: '1.4rem',
//     marginBottom: '0.5rem',
//     fontWeight: '600',
//   },
//   date: {
//     fontSize: '0.85rem',
//     color: '#ccc',
//     marginBottom: '1rem',
//   },
//   description: {
//     fontSize: '1rem',
//     lineHeight: '1.6',
//   },
// };

// export default Blog;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogPosts = [
  {
    title: "🌱 The Science Behind the Fizz",
    date: "December 15, 2024",
    description: "How we craft the perfect carbonation. It's not magic – it's science and passion.",
    tag: "Science",
  },
  {
    title: "🎨 New Flavor: Tropical Mango",
    date: "December 5, 2024",
    description: "Introducing a mango flavor that explodes with juicy tropical vibes!",
    tag: "Product",
  },
  {
    title: "♻️ Sustainability Matters",
    date: "November 28, 2024",
    description: "Eco-friendly fizz! How ChillFizz is reducing plastic and loving the planet.",
    tag: "Sustainability",
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>📰 ChillFizz Blog</h1>
      <p style={styles.subtitle}>
        Discover our journey, flavors, science, and planet-friendly innovations.
      </p>

      <div style={styles.grid}>
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            style={styles.card}
            className="blog-card"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <span style={styles.tag} className="blog-tag">{post.tag}</span>
            <h3 style={styles.title} className="blog-title">{post.title}</h3>
            <p style={styles.date} className="blog-date">{post.date}</p>
            <p style={styles.desc} className="blog-desc">{post.description}</p>
            <a href="#" style={styles.readMore} className="read-more">Read More →</a>
          </div>
        ))}
      </div>

      {/* Enhanced hover styles */}
      <style>{`
        .blog-card {
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative;
          overflow: hidden;
        }

        .blog-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,64,129,0.1) 0%, rgba(255,64,129,0) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .blog-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 35px rgba(255, 64, 129, 0.3);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255,255,255,0.2);
        }

        .blog-card:hover::before {
          opacity: 1;
        }

        .blog-card:hover .blog-title {
          color: #ff4081;
          transform: translateX(5px);
        }

        .blog-card:hover .blog-date {
          color: #fff;
        }

        .blog-card:hover .blog-desc {
          transform: translateX(3px);
        }

        .read-more {
          transition: all 0.4s ease;
          position: relative;
          display: inline-block;
        }

        .read-more:hover {
          color: #ffffff;
          text-decoration: none;
        }

        .read-more::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #fff;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .read-more:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .blog-tag {
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
          overflow: hidden;
        }

        .blog-tag::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }

        .blog-tag:hover {
          background-color: #ff5e9e;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(255, 94, 158, 0.4);
        }

        .blog-tag:hover::after {
          left: 100%;
        }

        .blog-title {
          transition: all 0.3s ease;
        }

        .blog-date {
          transition: all 0.3s ease;
        }

        .blog-desc {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(135deg, #0d0221, #2b0433)',
    color: '#fff',
    padding: '6rem 2rem',
    fontFamily: `'Montserrat', sans-serif`,
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #ff4081, #ff8a00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto 4rem',
    color: '#ccc',
  },
  grid: {
    display: 'grid',
    gap: '2.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.06)',
    padding: '2rem',
    borderRadius: '16px',
    textAlign: 'left',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
  },
  tag: {
    display: 'inline-block',
    background: '#ff4081',
    color: '#fff',
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
    borderRadius: '20px',
    marginBottom: '1rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '0.3rem',
    transition: 'all 0.3s ease',
  },
  date: {
    fontSize: '0.85rem',
    color: '#aaa',
    marginBottom: '1rem',
  },
  desc: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  readMore: {
    color: '#ff4081',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    textDecoration: 'none',
  },
};

export default Blog;