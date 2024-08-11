import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Preloader from './components/Pre';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mantine/core/styles.css';
import { theme } from './theme';
import HashRouter from './HashRouter';
// import Contact from "./components/Contact/Contact";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? 'no-scroll' : 'scroll'}>
          <Navbar />
          <Routes>
            <Route path="portfolio">
              <Route index element={<HashRouter />} />
              {/* Doing this because Github doesn't fully understand nested routes in github pages*/}
              {/* <Route path="project" element={<Projects />} />
              <Route path="about" element={<About />} />
              <Route path="resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/portfolio" />} /> */}
            </Route>
            <Route path="*" element={<Navigate to="portfolio" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
