import React from 'react';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import './App.css';
import Footer from './footer/footer';
import Navbar from './Navbar/navbar';
import Home from './pages/Home';
import Review from './pages/Review';
 
function App() {

  return (
    <div>
      <Navbar />  
       <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />  
    </div>
  );
}

export default App;