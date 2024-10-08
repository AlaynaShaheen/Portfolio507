import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/Alayna.jpeg';
export const Banner=()=>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toRotate=["Web developer","Competitive Programmer"];
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(100-Math.random()*100);
    const period=2000;
    useEffect(()=>{
        let ticker=setInterval(()=>{
                tick();

        },delta)
        return ()=>{clearInterval(ticker)};
    },[text])
    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }
            else if(isDeleting&&updatedText===''){
                setIsDeleting(false);
                setLoopNum(loopNum+1);
                setDelta(500);
            }
        }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hello!!`}</h1><h1>{`I am Alayna Shaheen`}</h1>
                    <h3><span className="wrap">{text}</span></h3>
                    <p>I am an aspiring Full Stack developer, driven by the desire to create innovative solutions and deliver exceptional user experiences. </p>
                    <a href="https://www.linkedin.com/in/alayna-shaheen-782680249"><button onClick={()=>console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/></Col>
                </Row>
            </Container>
        </section>

    )
}