import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import myImg from "../../Assets/avatar.svg";
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import profilePhoto from '../../Assets/sarthak.jpg';

function Home2() {
  const now = new Date();
  const startDate = new Date(2022, 8);
  let yearsDifference = now.getFullYear() - startDate.getFullYear();
  let monthsDifference = now.getMonth() - startDate.getMonth();

  if (monthsDifference < 0) {
    yearsDifference -= 1;
    monthsDifference += 12;
  }

  const yearString =
    yearsDifference !== 0 && `${yearsDifference} ${yearsDifference > 1 ? 'years' : 'year'}`;
  const monthString =
    monthsDifference !== 0 && `${monthsDifference} ${monthsDifference > 1 ? 'months' : 'month'}`;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a full time software engineer with
              <b className="purple">
                {' '}
                {yearString} {monthString}{' '}
              </b>
              of experience in the industry building
              <i>
                <span className="purple"> Frontend Web Applications and Backend Services </span>
              </i>
              at
              <b className="purple"> Lutron </b>
              as
              <i>
                <span> Senior Software Platform Engineer </span>
              </i>
              and at
              <b className="purple"> Immersive Analytics - Virginia Tech </b>
              as
              <i>
                <span> Software Engineer.</span>
              </i>
              <br />
              <br />I have been using programming languages like
              <i>
                <b className="purple"> Python, Go (GoLang), and TypeScript </b>
              </i>
              and modern Javascript Libraries, Frameworks and services like
              <i>
                <b className="purple"> React, AWS, RxDB</b> to build Offline first collaborative web
                applications.
              </i>
              <br />
              <br />I also have experience building &nbsp;
              <i>
                <b className="purple">AR/VR/MR applications </b>using
                <b className="purple"> Unity 3D and C#. </b>
              </i>
              <br />
              <br />I enjoy
              <i>
                <b className="purple"> software development / coding </b>
              </i>
              in general and whenever possible, I try to learn new technologies for
              <b className="purple"> Fun!</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profilePhoto} className="img-fluid profile-pic" alt="profile pic" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} id="contact" className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="s-icons">
                <a
                  href="mailto:sarthakkahaliya@vt.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://github.com/SarthakKahaliya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.linkedin.com/in/sarthak-kahaliya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="s-icons">
                <a
                  href="https://www.instagram.com/sarthak_kahaliya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
