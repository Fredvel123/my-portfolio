import React, { Fragment } from 'react';
// import styles css and images.

import './styles/bkg.css'


function BackgroundHome() {
  return (
    <Fragment>
      <div className="banner" id="home">
        <div className="text-info">
          <h1>
            Hi! I'm a Front-End developer and I can to make Web sites and aplications web.
          </h1>
          <h3>
            I work with the most popular and demanded technologies and I am ready to work with you.  
          </h3>
          <div className="buttons-home">
          <a href="#about" className="button-link">Let's started</a>
          <a href="https://drive.google.com/file/d/12_3ABx3NJyFxiHa5onRc-3Cez07zKmw4/view" id="cv"target="__blank" className="button-link">Download CV</a>

          </div>
        </div>
        
      </div>
    </Fragment>
  );
}

export default BackgroundHome;
