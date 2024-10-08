import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
// import { BsGithub } from "react-icons/bs";

function ProjectCards({
  ghLink,
  imgPath,
  title,
  description,
  isBlog,
  demoLink,
}: {
  ghLink: string;
  imgPath: string;
  title: string;
  description: string;
  isBlog: boolean;
  demoLink?: string;
}) {
  return (
    <a href={ghLink} target="_blank" className="project-github-link" rel="noreferrer">
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={imgPath}
          alt="card-img"
          style={{ aspectRatio: '3/2.1', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
          {/* <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ position: "absolute", bottom: "15px", left: "5%" }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"} */}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{
                marginLeft: '10px',
              }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </Card.Body>
      </Card>
    </a>
  );
}
export default ProjectCards;
