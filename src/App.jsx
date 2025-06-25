import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/section/Home';
import About from './components/section/About';
import Blog from './components/section/Blog';
import SingleBlog from './components/section/SingleBlog';
import Clients from './components/section/Clients';
import Pricing from './components/section/Pricing';
import Services from './components/section/Services';
import Contact from './components/section/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="blog"><Blog /></div>
      {/* <div id="singleblog"><SingleBlog /></div> */}
      <div id="clients"><Clients /></div>
      {/* <div id="pricing"><Pricing /></div> */}
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
