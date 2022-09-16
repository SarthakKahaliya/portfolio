import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import profilePhoto from "../../Assets/sarthak.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a software engineering graduate student at
              <i>
                <b className="purple"> Virginia Tech</b>
              </i>{" "}
              who loves building
              <i>
                <b className="purple" s>
                  {" "}
                  Software and Web Applications.
                </b>
              </i>{" "}
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> Python, Javascript {`(ES6)`} and C#. </b>
              </i>
              <br />
              <br />I have experience builidng &nbsp;
              <i>
                <b className="purple">AR/VR/MR applications </b>using{" "}
                <b className="purple">Unity 3D and C#.</b>{" "}
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Vue.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={profilePhoto}
                className="img-fluid profile-pic"
                alt="profile pic"
              />
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
