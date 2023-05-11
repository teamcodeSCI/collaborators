import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import DetailCustomer from '../../pages/Customer/Detail';
import Customer from '../../pages/Customer';
import AddCustomer from '../../pages/Customer/Add';
import './home.scss';
import DeleteCustomer from '../../pages/Customer/Delete';
import Collaborator from '../../pages/Collaborator';
import Pagination from '../../components/Pagination';
import Infomation from '../../pages/Collaborator/Infomation';
import Resetpassword from '../../pages/Collaborator/Resetpassword';
import Contract from '../../pages/Collaborator/Contract';
import Registercontract from '../../pages/Collaborator/Registercontract';
import Detailregistcontract from '../../pages/Collaborator/Detailregistcontract';
import Ratings from '../../pages/Collaborator/Ratings';
import Detailratings from '../../pages/Collaborator/Detailratings';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__sidebar'>
        <Sidebar />
      </div>
      <div className='home__box'>
        <div className='home__header'>
          <Header />
        </div>
        <div className='home__main'>
          <Outlet />
          {/* <Customer /> */}
          {/* <AddCustomer /> */}
          {/* <DetailCustomer /> */}
          {/* <DeleteCustomer /> */}
          {/* <Pagination /> */}
          {/* <Collaborator /> */}
          {/* <Infomation /> */}
          {/* <Resetpassword /> */}
          {/* <Contract /> */}
          {/* <Registercontract /> */}
          {/* <Detailregistcontract /> */}
          {/* <Ratings /> */}
          {/* <Detailratings /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
