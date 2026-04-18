import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Usama Arshad</span>{" "}
            from <span className="purple">Lahore, Pakistan</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Quality Assurance Engineer</span> at{" "}
            <span className="purple">ClecoConsult</span>,{" "} <span>based in</span>{" "}
            <span className="purple">Denmark</span>
            .
            <br />I hold an Bachelor of Science in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Virtual University of Pakistan</span>.
            <br />
            <br />
            Outside of work, I enjoy activities that keep me active, curious, and continuously learning:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis 🏓
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies & Exploring New Content 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Internet Surfing 🌐 
            </li>
            <li className="about-activity">
              <ImPointRight/> Learning New Technologies 💡
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Committed to delivering quality and building reliable software that makes a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Usama Arshad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
