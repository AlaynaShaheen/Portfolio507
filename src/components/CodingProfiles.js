import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projImg1 from "../assets/codechef.png";
import projImg2 from "../assets/leetcode.png";
import projImg3 from "../assets/hackerrank.png";
import projImg4 from "../assets/hackerearth.png";
import projImg5 from "../assets/codingninjas.png";
import projImg6 from "../assets/gfg.png";
import projImg7 from "../assets/codeforces.png";
export const CodingProfiles = () => {
  const profiles = [
    {
      title: 'CodeChef',
      desc:'Problems:',
      problems:646,
      descr:'Rating:',
      rating:1630,
      link: 'https://www.codechef.com/users/alaynashaheen2',
      imgUrl:projImg1,
    },
    {
        title: 'LeetCode',
        desc:'Problems:',
        problems:295,
        descr:'Rating:',
        rating:1575,
        link: 'https://leetcode.com/u/alaynashaheen2/',
        imgUrl:projImg2,
    },
    {
        title: 'HackerRank',
        link: 'https://www.hackerrank.com/profile/21L31A0507',
        imgUrl:projImg3,
    },
    {
        title: 'HackerEarth',
        link: 'https://www.hackerearth.com/@alaynashaheen2',
        imgUrl:projImg4,
      },
      {
        title: 'GeeksForGeeks',
        desc:'Problems:',
        problems:77,
        link: 'https://www.geeksforgeeks.org/user/alaynashaheen2/',
        imgUrl:projImg6,
      },
      {
        title: 'CodingNinjas',
          
          link: 'https://www.naukri.com/code360/profile/d0f49e11-a407-4e50-88bc-ccf7c34a5b09',
          imgUrl:projImg5,
      },
      {
        title: 'CodeForces',
          link: 'https://codeforces.com/profile/Alayna__Shaheen',
          imgUrl:projImg7,
      },
  ];

  return (
    <section className="coding-profile-section" id="coding-profiles">
      <Container>
        <h2 className='cp-heading'>Coding Profiles</h2>
        <Row className="justify-content-center">
          {profiles.map((profile, index) => (
            <Col key={index} sm={12} md={3} className="d-flex justify-content-center mb-4">
              <div className="coding-profile-card">
                <div className="coding-profile-card-content">
                <img className="proimg" src={profile.imgUrl}/>
                <h2>{profile.title}</h2>
                <h6>{profile.desc}{profile.problems}</h6>
                <h6>{profile.descr}{profile.rating}</h6>
                  <a href={profile.link} target="_blank"><button className='view-profile'>View Profile</button></a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
