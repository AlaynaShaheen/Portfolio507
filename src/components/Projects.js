import { Container, Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/project-1.png";
import projImg2 from "../assets/project-2.png";
import projImg3 from "../assets/project-3.png";
import projImg4 from "../assets/project-4.png";
import projImg5 from "../assets/project-5.png";
import projImg6 from "../assets/project-6.png";
import colorSharp2 from "../assets/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () =>{
    const projects=[
        {
            title:"EstateExplorer",
            description:"Design & Development",
            imgUrl:projImg1,
            proUrl:"https://estateexplorer-y0po.onrender.com/"
        },
        {
            title:"WeatherQuill",
            description:"Design & Development",
            imgUrl:projImg3,
            proUrl:"https://github.com/AlaynaShaheen/Weather-Quill.git"
        },
        {
            title:"DomainAnalyzer",
            description:"Design & Development",
            imgUrl:projImg2,
            proUrl:"https://domain-analyzer-kcvo.onrender.com/"
            
        },
        {
            title:"MediTrack",
            description:"Design & Development",
            imgUrl:projImg4,
        },
        {
            title:"CareerCompass",
            description:"Design & Development",
            imgUrl:projImg5,
        },
        {
            title:"Portfolio",
            description:"Design & Development",
            imgUrl:projImg6,
        },
    ];
    return (
       <section className="project" id="project">
        <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>
                        Projects
                    </h2>
                    <p>A collection of innovative projects showcasing my expertise in web development, open-source contributions, and problem-solving. Each project reflects my commitment to writing clean, efficient code and creating user-centric solutions.</p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
    </Nav> 
    <Tab.Content id="slideInUp" className= {isVisible?"animate_animated animate_slideInUp" : ""}>
        <Tab.Pane eventKey="first">
           <Row>
            {
                projects.map((project,index)=>{
                    return(
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
        <img className="background-image-right" src={colorSharp2}/>
       </section>
    )
}