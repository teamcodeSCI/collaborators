import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__box'>
        <div className='home__header'>
          <Header />
        </div>
        <div className='home__main'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
