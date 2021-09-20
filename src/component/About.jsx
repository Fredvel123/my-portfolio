import React, { Fragment } from 'react'
import './styles/about.css'
import profile from './images/profile.jpg'

function About() {
  return (
    <Fragment>
      <div className="about-me" id="about">
        <div className="card">
          <div className="card-text-img">
            <img src={profile} alt="" />

            <div className="text-card">
              <div className="title">
                <h1>About me </h1>
              </div>
              <div className="text">
                <h2>
                  Hi There! I am Freddy Velarde Silva. I've been studying web
                  development throught 1 year and I also built several Proyects
                  where I wanted to apply all my knowledge. I created my
                  portfolio to show my work and my technical skills, thus be
                  able to work in the Technology Industry.
                </h2>
              </div>
              <div className="button">
                <a href="#!" className="button-link">Watch Portfolio</a>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
