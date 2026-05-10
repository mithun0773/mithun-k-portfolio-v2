import React from "react";

import Navbar from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./App.css";
const App = () => {
  return (
   
     <div className="portfolio-app">
      {/* ── SHARED BACKGROUND LAYER ── */}
      <div className="fixed-bg">
        <div className="bg-grid"></div>
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
      </div>

      {/* ── SCROLLING CONTENT LAYER ── */}
      <main className="relative-content">
        <Nav />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
