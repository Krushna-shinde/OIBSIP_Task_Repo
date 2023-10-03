import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krushna Shinde </span>
            from <span className="purple"> Nashik, Maharashtra , India.</span>
            <br />I am a Graduate in Computer Science. Bsc(CS).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Tourism
            </li>
          </ul>

          <p style={{ color: "rgb(15 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Krushna Shinde.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
