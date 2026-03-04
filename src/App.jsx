import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Insights from './components/Insights';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Coverage />
        <Testimonials />
        <Team />
        <Insights />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
