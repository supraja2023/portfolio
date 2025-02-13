import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import springer from  "../../Assets/Projects/springer.PNG";
import Paperaward from  "../../Assets/Projects/Paperaward.PNG";


function Achievements() {
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
              isBlog={true}
              title="Business English Certificate (BEC) B1 Level"
              description="Attained B1 level in BEC by Cambridge University "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={true}
              title="Java Programming Certificate - NPTEL (98%) from IIT Kharagpur"
              description=" Completed the Java Programming course from NPTEL with a 98% score, providing a strong foundation in object-oriented programming and Java technologies."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={true}
              title="Microsoft Certification"
              description="Achieved a Microsoft Certification, demonstrating proficiency in key Microsoft technologies and tools. (Provide specific certification name or area of expertise if needed)."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Paperaward}
              isBlog={true}
              title="Best Paper Award for 'Nanoelectronics: Machine Learning, Internet of Things, and Computer Systems for Arduino-Based Ultrasonic Water Dispenser Machine'"
              description="Awarded the Best Paper Award for research on integrating machine learning, IoT, and Arduino-based systems for creating an ultrasonic water dispenser machine."
              ghLink="https://github.com/supraja2023/expensemanagementfrontend/"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springer}
              isBlog={true}
              title="personal eBook: Innovations in Signal Processing and Embedded Systems"
              description="Published an article in springer"       
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
