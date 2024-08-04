import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Preloader from './components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume/ResumeNew';
import ScrollToTop from './components/ScrollToTop';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mantine/core/styles.css';
import { theme } from './theme';
// import Contact from "./components/Contact/Contact";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MantineProvider theme={theme}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? 'no-scroll' : 'scroll'}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/project" element={<Projects />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/resume" element={<Resume />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<Navigate to="/portfolio/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;