import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my pic.png";
import Tilt from "react-parallax-tilt";

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
              I am a passionate QA Engineer with hands-on experience in both
              manual and basic automation testing. I enjoy identifying bugs,
              improving software quality, and ensuring smooth user experiences.
              I have worked on functional, regression, smoke, and UI testing for
              web applications, and I am comfortable designing and executing test
              cases as well as reporting defects.
              I also have basic experience with automation using Python and
              Selenium, which helps me improve testing efficiency. I like working
              in agile environments and collaborating closely with developers to
              deliver reliable and high-quality products.
              I am always eager to learn new tools and technologies to grow as a QA professional.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  manual testing, including functional, regression, smoke, and UI testing, with strong skills in test case design, execution, and defect tracking using JIRA{""}
                </b>
              </i>
              .
              <br />
              <br />
              I also have hands-on experience with basic 
              <i>
                <b className="purple">
                  {" "}
                  automation using Python and Selenium{""}
                </b>
              </i>
              .
              <br />
              <br />
              {/* Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
