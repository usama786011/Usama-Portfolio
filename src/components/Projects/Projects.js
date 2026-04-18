import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clemata from "../../Assets/Projects/clemata.png";
import clebiz from "../../Assets/Projects/clebiz.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Current <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I'm currently working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={clemata}
              isBlog={false}
              title="CLEMATA"
              description="Clemata is a comprehensive PHP-based ERP solution designed to streamline workforce and operations management.
              It provides advanced tools for planning daily tasks, managing employee schedules, tracking working hours, handling leave
              requests, and calculating salaries with precision. One of its key features is the seamless integration with Denmark’s
              authorized online salary system, enabling automated and secure salary transfers. Clemata is built to improve efficiency,
              reduce manual workload, and ensure compliance with local payroll regulations. The platform is continuously maintained and
              enhanced by WayIO, ensuring scalability and reliability for enterprise-level operations."
              demoLink="https://app.clemata.dk"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={clebiz}
              isBlog={false}
              title="CLEBIZ"
              description="Clebiz is a business-oriented management platform focused on simplifying operational workflows and communication.
              It complements enterprise systems by offering features that help organizations manage internal processes, client interactions,
              and administrative tasks more effectively. Designed with usability in mind, Clebiz provides a structured environment for
              handling business activities, improving collaboration, and maintaining organized records across departments. Like Clemata,
              Clebiz is also developed and managed by WayIO, which is now expanding as an independent software house to deliver a wide
              range of mobile, web, and desktop solutions beyond its in-house products."
              demoLink="https://app.clebiz.dk"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
