import React, { Fragment } from 'react';
// import components
import About from './component/About';
import BackgroundHome from './component/BackgroundHome';
import Menu from './component/Menu';
// import styles css.
import './component/styles/home.css'
import './component/styles/mediaQueries.css'

function Home() {
  return (
    <Fragment>
      <Menu />
      <div className="background">
        <BackgroundHome />
        <About />
      </div>
    </Fragment>
  );
}

export default Home;
