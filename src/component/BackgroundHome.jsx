import React, { Fragment } from 'react';
// import styles css and images.
import background from './images/bkg.jpg';
import './styles/bkg.css'

function BackgroundHome() {
  return (
    <Fragment>
      <div className="banner">
        <div className="text-info">
          <h1>
            Hi there! I'm a Front-End developer and I can to make Web sites and aplications web.
          </h1>
          <h3>
            I work with the most popular and demanded technologies and I am ready to work with you.  
          </h3>
          <p>Let's started</p>
        </div>
      </div>
    </Fragment>
  );
}

export default BackgroundHome;
