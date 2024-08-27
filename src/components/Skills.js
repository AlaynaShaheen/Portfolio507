import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from '../assets/meter.png';
import html from '../assets/html.png';
import python from '../assets/python.png';
import git from '../assets/git.png';
import nodejs from '../assets/nodejs.png';
import react from '../assets/reactjs.png';
import js from '../assets/javascript.png';
import tw from '../assets/tailwind.png';
import bs from '../assets/bootstrap.png';
import ms from '../assets/mysql.png';
import ex from '../assets/express.png';
import colorSharp from '../assets/color-sharp.png';
export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                     <div className="skill-box">
                        <h2>
                            Skills
                        </h2>
                        <p>I am a dynamic and versatile developer with a strong foundation in both front-end and back-end technologies. My expertise lies in creating seamless, user-friendly interfaces and developing robust, scalable applications. Over the course of my journey, I have honed my skills in open-source contributions, actively collaborating with diverse teams to deliver high-quality code and innovative solutions.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"/>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image"/>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image"/>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image"/>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image"/>
                            </div>
                            <div className="item">
                                <img src={tw} alt="Image"/>
                            </div>
                            <div className="item">
                                <img src={bs} alt="Image"/>
                            </div>
                            <div className="item">
                                <img src={ms} alt="Image"/>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image"/>
                          </div>
                          <div className="item">
                                <img src={git} alt="Image"/>
                          </div>
                          <div className="item">
                                <img src={ex} alt="Image"/>
                          </div>
                        </Carousel>
                     </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
      )
}