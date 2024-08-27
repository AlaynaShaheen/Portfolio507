import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

export const Experience= () => {
  const experiences = [
    {
      role: 'Web Developer',
      company: 'Harmony Infotech',
      duration: 'Apr 2024 - Present',
      description: 'Developed Domain Analyzer, a web app providing detailed domain information and improving data accessibility.'
    },
    {
      role: 'Open-source contributor',
      company: 'GirlScript Summer of Code',
      duration: 'May 2024 - Aug 2024',
      description: 'Achieved a rank of 206 out of over 27,000 participants. Contributed to projects, improving features and fixing critical bugs.'
    },
    {
      role: 'Web Developer Intern',
      company: 'EduMoon',
      duration: 'JAN 2023 - JULY 2023',
      description: 'Developed the EduMoon Tuitions Page in the official website under the EduMoon company as a part of my internship.'
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={8}>
            <h2 className="cp-heading">Experience</h2>
            <Carousel
              prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
            >
              {experiences.map((experience, index) => (
                <Carousel.Item key={index}>
                  <div className="experience-content">
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                    <p>{experience.duration}</p>
                    <p>{experience.description}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
