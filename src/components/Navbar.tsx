import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { HashLink } from 'react-router-hash-link';
// import logo from "../Assets/logo.png";

import { Link, useLocation } from 'react-router-dom';

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from 'react-icons/ai';

import { CgFileDocument } from 'react-icons/cg';
import { useMediaQuery } from '@mantine/hooks';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import useHashObserver from '@/hooks/useHashObserver';

const links = [
  {
    type: HashLink,
    link: '/portfolio#home',
    label: 'Home',
    icon: <AiOutlineHome style={{ marginBottom: '2px' }} />,
  },
  {
    type: Link,
    link: '/portfolio/about',
    label: 'About',
    icon: <AiOutlineUser style={{ marginBottom: '2px' }} />,
  },
  {
    type: Link,
    link: '/portfolio/project',
    label: 'Projects',
    icon: <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} />,
  },
  {
    type: Link,
    link: '/portfolio/resume',
    label: 'Resume',
    icon: <CgFileDocument style={{ marginBottom: '2px' }} />,
  },
  {
    type: HashLink,
    link: '/portfolio#contact',
    label: 'Contact',
    icon: <AiOutlineMail style={{ marginBottom: '2px' }} />,
  },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { pathname } = useLocation();

  const hash = useHashObserver(['home', 'contact']);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand href="/portfolio" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <h1 style={{ fontSize: '2.2em' }} className="main-name">
            SK
          </h1>
        </Navbar.Brand>
        {isMobile && <ColorSchemeToggle />}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Item key={link.label}>
                <Nav.Link
                  as={link.type}
                  to={link.link}
                  data-active={(hash && link.link.includes(hash)) || pathname === link.link}
                  onClick={() => updateExpanded(false)}
                >
                  {link.icon} {link.label}
                </Nav.Link>
              </Nav.Item>
            ))}
            {/* <Nav.Item>
              <Nav.Link as={Link} to="/portfolio/" data-active={data} onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/portfolio/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/portfolio/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/portfolio/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item> */}
            {/*
           <Nav.Item>
             <Nav.Link as={HashLink} to="portfolio#contact" data-active={hash==="#contact"} onClick={() => updateExpanded(false)}>
               <AiOutlineMail style={{ marginBottom: '2px' }} /> Contact
             </Nav.Link>
           </Nav.Item> */}
          </Nav>
          {!isMobile && <ColorSchemeToggle />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
