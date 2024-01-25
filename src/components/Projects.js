import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shorty- Url Shortner",
      description: "Design & Development",
      imgUrl: projImg1,
      projectUrl : 'https://shorty-iaog.onrender.com/'
    },
    {
      title: "Movie Finder",
      description: "Design & Development",
      imgUrl: projImg2,
      projectUrl : 'https://mindslayer001.github.io/Movify/',
    },
    {
      title: "F.com - A fashion Ecommerce",
      description: "Design & Development",
      imgUrl: projImg3,
      projectUrl :'',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Embark on a journey through my digital endeavors. From inventive coding to creative problem-solving, my projects reflect a dedication to pushing boundaries and creating impactful digital experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="colorsharp2"></img>
    </section>
  )
}
