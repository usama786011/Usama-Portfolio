import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Toolstack() {
  return (
    <>
      {/* 🔹 First Row */}
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/8940/8940782.png" width="25" alt="Selenium" />
          </a>
          <div className="tech-icons-text">Selenium</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968875.png" width="25" alt="JIRA" />
          </a>
          <div className="tech-icons-text">JIRA</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Postman} alt="Postman" />
          <div className="tech-icons-text">Postman</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/17949/17949428.png" width="25" alt="JMeter" />
          </a>
          <div className="tech-icons-text">JMeter</div>
        </Col>
      </Row>

      {/* 🔹 Second Row */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={vsCode} alt="VS Code" className="tech-icon-images" />
          <div className="tech-icons-text">VS Code</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={Git} alt="Git" />
          <div className="tech-icons-text">Git</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <img src={chrome} alt="Chrome" className="tech-icon-images" />
          <div className="tech-icons-text">Chrome DevTools</div>
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;