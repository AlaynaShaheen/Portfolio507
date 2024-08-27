import { Container,Row,Col } from "react-bootstrap";
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
import github from '../assets/github.png';
import logo from '../assets/logo_pt.png';
export const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                   <Col sm={6}>
                   <img src={logo} alt="Logo" className="logo"/>
                   </Col>
                 
                   <Col sm={6} className="text-center text-sm-end">
                   <div className="social-icon">
                <a href="https://www.linkedin.com/in/alayna-shaheen-782680249"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/AlaynaShaheen"><img src={github} alt="" /></a>
                <p>@alayna shaheen</p>
                   <p>CopyRight 2024. All Rights Reserved</p>
              </div>  
                   </Col>
                  
                </Row>
            </Container>
        </footer>
    )
}