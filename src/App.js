// Importing necessary modules
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import './App.css';
import Footer from './footer/footer';
import Navbar from './Navbar/navbar';
import ImageSlider from './ImageSlider';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />  {/* Navbar for navigation */}
      
      {/* Sections of the page */}
      <section id="slider">
        <ImageSlider />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />  {/* Footer at the bottom */}
    </div>
  );
}

export default App;

