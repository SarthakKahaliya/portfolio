import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Sarthak Kahaliya</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Sarthak Kahaliya</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="s-icons">
              <a
                href="mailto:sarthakkahaliya@vt.edu"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://github.com/SarthakKahaliya"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://www.linkedin.com/in/sarthak-kahaliya/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="s-icons">
              <a
                href="https://www.instagram.com/sarthak_kahaliya/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
