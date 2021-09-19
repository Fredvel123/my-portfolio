import React, { Fragment } from 'react';
import BackgroundHome from './component/BackgroundHome';
import Menu from './component/Menu';
import Portofolio from './component/Portofolio';
import './component/styles/home.css'

function Home() {
  return (
    <Fragment>
      <Menu />
      <div className="background">
        <BackgroundHome />
        <Portofolio />
      </div>
    </Fragment>
  );
}

export default Home;
