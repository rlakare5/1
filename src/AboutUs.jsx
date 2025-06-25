import './AboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      <section className="hero-section">
        <h1 data-aos="fade-down">About <span>ChillFizz</span></h1>
        <p data-aos="fade-up">Your ultimate fizzy refreshment experience</p>
      </section>

      <section className="story-section" data-aos="fade-right">
        <div className="text-block">
          <h2>Our Story</h2>
          <p>
            ChillFizz was born to shake up the soft drink world — literally. From college chill spots to late-night coding marathons, our fizz has sparked joy across generations.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1607532941433-304659e81918" alt="Cold Drink" />
      </section>

      <section className="mission-section" data-aos="fade-left">
        <img src="https://images.unsplash.com/photo-1610546452643-0d69b86d3cde" alt="Refreshing Drink" />
        <div className="text-block">
          <h2>Our Mission</h2>
          <p>
            We're more than just a drink — we’re a lifestyle. Eco-friendly packaging, bold flavors, and always fizzing with excitement.
          </p>
        </div>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} ChillFizz. All rights reserved.
      </footer>
    </div>
  );
}
