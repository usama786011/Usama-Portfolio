import React from "react";
import { Col, Row } from "react-bootstrap";
import Python from "../../Assets/TechIcons/Python.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/12539/12539814.png" width="25" alt='new' />
        <div className="tech-icons-text">Automation Testing</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/1238/1238450.png" width="25" alt='new' />
        <div className="tech-icons-text">Manual Testing</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/9335/9335803.png" width="25" alt='new' />
        <div className="tech-icons-text">Test Case Design & Execution</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/10061/10061742.png" width="25" alt='new' />
        <div className="tech-icons-text">Bug Reporting & Defect Tracking</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/3967/3967015.png" width="25" alt='new' />
        <div className="tech-icons-text">Agile / Scrum</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/11629/11629115.png" width="25" alt='new' />
        <div className="tech-icons-text">Software Development Life Cycle</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/16942/16942749.png" width="25" alt='new' />
        <div className="tech-icons-text">Software Testing Life Cycle</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png" width="25" alt='new' />
        <div className="tech-icons-text">Frontend Developer</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/3227/3227574.png" width="25" alt='new' />
        <div className="tech-icons-text">Theme Customization (UI Styling)</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width="25" alt='new' />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" width="25" alt='new' />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" width="25" alt='new' />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/10645/10645621.png" width="25" alt='new' />
        <div className="tech-icons-text">Problem Solving & Analytical</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/7959/7959324.png" width="25" alt='new' />
        <div className="tech-icons-text">Team Coordination</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src="https://cdn-icons-png.flaticon.com/128/2997/2997954.png" width="25" alt='new' />
        <div className="tech-icons-text">Process Improvement & Documentation</div>
      </Col>
      
    </Row>
  );
}

export default Techstack;
