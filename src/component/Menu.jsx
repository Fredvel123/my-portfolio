import React, { Fragment, useState } from 'react';
// Import styles css and images.
import './styles/menu.css';
import facebook from './icons/facebook.png';
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import profile from './images/profile.jpg';
import icon from './icons/menu.png';
import iconX from './icons/x-menu.png';


function Menu() {
  const [open, setOpen] = useState(false);
  const openClose = () => {
    setOpen(!open);
  }
  
  return (
    <Fragment>
      <div className={open ? "menu2" : "menu"}>
        <div className="header">
          <img src={profile} alt="" />
          <div className="text">
            <h1>Freddy Velarde</h1>
            <h3>Front-End Developer</h3>
          </div>
        </div>

        <div className="menu-nav">
          <ul>
            <a href="#home">Home</a>
            <a href="#about">About me</a>
            <a href="#!">Portfolio</a>
            <a href="#!">Skills</a>
          </ul>
        </div>
        <div className="icons">
          <a href="#!">
            <img src={github} alt="" />
          </a>
          <a href="#!">
            <img src={linkedin} alt="" />
          </a>
          <a href="#!">
            <img src={facebook} alt="" />
          </a>
        </div>
      </div>
      <div className="icon-menu">
        {open ? (
          <img src={icon} alt="" onClick={openClose} />
        ) : (
          <img src={iconX} alt="" onClick={openClose} />
        )}
      </div>
    </Fragment>
  );
}

export default Menu;
