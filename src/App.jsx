import React from "react";

import Navbar from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
