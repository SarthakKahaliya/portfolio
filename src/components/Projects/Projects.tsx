import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/olympic.png';
import editor from '../../Assets/Projects/tms.png';
import chatify from '../../Assets/Projects/bookstore.png';
import bitsOfCode from '../../Assets/Projects/ecom-clothing.png';
import ScrollToTop from '../ScrollToTop';

function Projects() {
  return (
    <Container fluid className="project-section">
      <ScrollToTop />
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p>Here are a few projects I&apos;ve worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-commerce Clothin Website"
              description="Designed a fully functional e-commerce website, implemented using React.js and Firebase, where visitors can sign-in, update the cart and, purchase the Clothes."
              ghLink="https://github.com/SarthakKahaliya/ecom-clothing"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Task Management System"
              description="Designed and implemented a fully functional Task Management System website using PHP and MySQLi with Authentication. User can
create projects and add tasks to it, assign the task to other users and updates the status."
              ghLink="https://github.com/SarthakKahaliya/task-management-system"
              demoLink="https://sarthak-task-management-system.herokuapp.com/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Olympic - Data Story"
              description="Designed and implemented a Olympics Data Visualization Dashboard using D3.js with a team. The dataset of last 120 Years of Olympic Games is used to showcase the Men and Women Distribution and how it is changing throughout the time. It
also showcases The countries performance throughout the time in a visually appealing way."
              ghLink="https://github.com/SarthakKahaliya/Olympics-Visualization"
              demoLink="https://sarthakkahaliya.github.io/Olympics-Visualization/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bookstore"
              description="Designed and implemented a fully functional Bookstore e-commerce website, using Vue.js Framework, where visitors
can look, purchase the Books."
              ghLink="https://github.com/SarthakKahaliya/Bookstore-Web-Development"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
