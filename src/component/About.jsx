import React, { Fragment } from 'react'
import './styles/about.css'
import profile from './images/profile.jpg'

function About() {
  return (
    <Fragment>
      <div className="about-me" id="about">
        <div className="card">
          <div className="title">
            <h1>About me </h1>
          </div>
          <img src={profile} alt="" width="250px"/>
          <div className="text">
            <h2>
              Hi There! I am Freddy Velarde Silva. I've been studying web
              development throught 1 year and I also built several Proyects
              where I wanted to apply all my knowledge. I've created my
              portfolio to show my work and my technical skills, thus be able to
              work in the Technology Industry.
            </h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
