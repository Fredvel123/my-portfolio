import React, { Fragment } from 'react';
import About from './component/About';
import BackgroundHome from './component/BackgroundHome';
import Menu from './component/Menu';
import './component/styles/home.css'

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
