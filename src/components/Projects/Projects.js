import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import textAnalyser from  "../../Assets/Projects/textanalyser.PNG"
import ISP from  "../../Assets/Projects/ISP.PNG"


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
              imgPath={textAnalyser}
              isBlog={false}
              title="Text Analyser"
              description="A user friendly tool which will help to edit blogs or content.This tool is perfect for bloggers, content writers, or anyone working with text who needs to quickly clean and format content for blogs, articles, or social media posts."
              ghLink="https://github.com/supraja2023/Text-analyzer"
              demoLink="https://supraja2023.github.io/Text-analyzer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News-Pigeon"
              description="As an Avid News Enthusiast I designed News Pigeon  to provide users with the latest news updates from various sources. The platform allows users to explore trending news articles and filter them based on specific categories such as Entertainment, Sports, Politics, Technology, Health, Business, and more. By offering a categorized view, users can easily navigate and access news relevant to their interests."
              ghLink="https://github.com/supraja2023/News-Pigeon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Expense-Management-Portal"
              description="The Expense Management Portal is a comprehensive web application designed to streamline the management and tracking of expenses for my uncle's shop. The platform allows shop workers to upload expense details along with receipts for approval. My uncle, as the manager, has full control to review, approve, or reject submitted expenses. Additionally, the portal provides insightful charts and reports, allowing your uncle to analyze total revenue and expenses categorized by year, type, and approval status (approved or rejected). This will help him efficiently track the financial health of the shop and make informed business decisions."
              ghLink="https://github.com/supraja2023/expensemanagementfrontend/"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ISP}
              isBlog={false}
              title="Information Security Portal"
              description="Designed and developed dynamic dashboards for ECS, CAP, VAPT, TIP, and SOC modules, enhancing user experience and functionality. Built robust server-side applications with Node.js and integrated them with MongoDB for seamless data management. Led deployment on AWS and Azure DevOps, ensuring scalability and secure hosting. Developed the ECS module for risk assessment, threat actor identification, and remediation plans. Created the CAP module to automate compliance checks and improve reporting efficiency, alongside real-time SOC dashboards for monitoring security incidents."       
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
