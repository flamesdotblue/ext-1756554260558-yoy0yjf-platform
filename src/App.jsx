import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_800px_at_10%_0%,#E9F5FF_0%,transparent_60%),radial-gradient(1000px_600px_at_100%_0%,#FDEBFF_0%,transparent_55%),linear-gradient(180deg,#FFFFFF, #FAFAFF)] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
