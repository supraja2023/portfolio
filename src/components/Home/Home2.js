import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Keep the avatar image
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I am an innovative Full Stack Developer with a deep understanding of both front-end and back-end technologies. I excel in creating robust, user-friendly applications and solving complex coding challenges. With a collaborative approach to projects, I aim to enhance team productivity and deliver high-quality results. My goal is to drive digital transformation and elevate user experiences through cutting-edge solutions.
              <br />
              <br />
              I have experience working with a variety of technologies including
              <i>
                <b className="purple"> HTML/CSS, JavaScript, React.js, Angular, Node.js, Springboot, MongoDB, MySQL</b>
              </i>
              <br />
              <br />
              Some of my notable projects include:
              <ul>
                <li>
                  <b className="purple">Cyber Risks Analysis and Mitigation Suite:</b> Developed interactive modules for dashboards such as ECS, CAP, VAPT, TIP, and SOC. Led deployment using AWS and Azure DevOps.
                </li>
                <li>
                  <b className="purple">Student Management System:</b> Designed and developed intuitive front-end layouts, improving user engagement and system performance.
                </li>
                <li>
                  <b className="purple">Insurance Policy Management Dashboard:</b> Built responsive dashboards and integrated real-time insurance data using React.js and Angular.
                </li>
              </ul>
              <br />
              In my free time, I also explore and contribute to open-source projects, applying my skills to real-world problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/your-github" // Replace with your GitHub URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/your-twitter" // Replace with your Twitter URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suprajagvs/" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/your-instagram" // Replace with your Instagram URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
