import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Supraja Rao </span>
            from <span className="purple"> Hyderabad.</span>
            <br />
            I am currently employed as a software developer at RHYM Tech
            <br />
            I have completed my BTech from MLRIT
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing On Quora
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Publishing Blogs and Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding is not just about writing lines of code; it's about solving problems and making people's lives easier, one line at a time. When you love what you do, it shows in the impact you make"{" "}
          </p>
          <footer className="blockquote-footer">Supraja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
