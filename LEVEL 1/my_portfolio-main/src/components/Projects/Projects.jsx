import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resumeBuilder from "../../Assets/Projects/resumeBuilder.png";
import flashcard from "../../Assets/Projects/flashcard.png";
import myportfolio from "../../Assets/Projects/myportfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flashcard}
              isBlog={false}
              title="Flashcard Generator "
              description="This is a Single Page application created using ReactJs. All responsive design are developed using TailwindCss framework. React icons also used. In this app user can make a flashcard as per there information. This project has three pages CreateFlashcard, MyFlashcard and last FlashcardDetails Page. "
              // ghLink="https://github.com/panku-chavan/flashcard-generator"
              // demoLink="https://flashcard-generator-15e43.web.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumeBuilder}
              isBlog={false}
              title="Resume Builder"
              description="In this app user can make there resume by simply adding there information and download there resume in pdf format.This is a simple react app. The hole app develop with reactJs, React hooks, Design with react bootstrap and manage the state using react redux. This is also a Single Page application SPA."
              // ghLink="https://github.com/panku-chavan/resume-builder"
              // demoLink="https://panku-chavan.github.io/resume-builder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myportfolio}
              isBlog={false}
              title="My Portfolio"
              description="This is my portfolio app. I make this this app using create-react-app. I design this app using bootstrap framework. This is responsive app. In this app i tried to explained myself in brief. I have added my resume and all information about me. I added my all projects or recent work also. "
              ghLink="https://github.com/Krushna-shinde/my_portfolio"
              demoLink="https://krushna-shinde.github.io/my_portfolio/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
