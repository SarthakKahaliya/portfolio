import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { TbCSharp } from "react-icons/tb";
import { CgWebsite } from 'react-icons/cg';
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
// } from "react-icons/di";
// import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";
import Button from 'react-bootstrap/Button';

function Expstack() {
  return (
    <Container>
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={12} md={12} className="exp-content">
          <Row>
            <Col lg={9}>
              <b className="purple">Immersive Analytics </b>at Virginia Tech
              <br />
              <i>(Scientific Programmer)</i>
            </Col>
            <Col>
              Blacksburg, VA
              <br />
              <i>August 2022 - Present</i>
            </Col>
          </Row>
          <br />
          <ul>
            <li>
              <span className="purple">Brief: </span> Developing and maintaining the code for a
              prototype using a Microsoft HoloLens 2 device that allows embodied interaction with
              different kinds of 2D and 3D data visualizations in a mixed reality space.
            </li>
            <li>
              <span className="purple">Technology & Tools Used: </span> Unity 3D, C#, HoloLens 2,
              AR/VR Technology.
            </li>
          </ul>
          <Button
            variant="primary"
            href="https://icat.vt.edu/content/icat_vt_edu/en/events/2021/05/bridging-physical-distance---icat-creativity---innovation-celebr/immersive-analytics.html"
            target="_blank"
            style={{ width: '100%', margin: '0 auto' }}
          >
            <CgWebsite /> &nbsp; Website
          </Button>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={12} md={12} className="exp-content">
          <Row>
            <Col lg={9}>
              <b className="purple">Linux World Informatics Pvt. Ltd. </b>
              <br />
              <i>(Research Intern)</i>
            </Col>
            <Col>
              Jaipur, India
              <br />
              <i>May 2019 - July 2019</i>
            </Col>
          </Row>
          <br />
          <ul>
            <li>
              <span className="purple">Brief: </span> Team Lead in a group of four responsible for
              research and building of an Augmented Reality based application on Unity Engine for
              Restaurants which displays the menu items in Augmented Reality, with the help of
              Vuforia Augmented Reality and can be used to customize and, order the food.
            </li>
            <li>
              <span className="purple">Technology & Tools Used: </span> Unity Engine, C#, Vuforia
              Augmented Reality.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Expstack;
