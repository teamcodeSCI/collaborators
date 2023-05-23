import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
<<<<<<< HEAD
import Collaborator from './pages/Collaborator';
import Contract from './pages/Collaborator/Contract';
import Detailratings from './pages/Collaborator/Detailratings';
import Detailregistcontract from './pages/Collaborator/Detailregistcontract';
import Infomation from './pages/Collaborator/Infomation';
import Ratings from './pages/Collaborator/Ratings';
import Registercontract from './pages/Collaborator/Registercontract';

import Customer from './pages/Customer';
import AddCustomer from './pages/Customer/Add';
import DetailCustomer from './pages/Customer/Detail';
import Login from './pages/Login';
import Financialreport from './pages/Report/FinancialReport';
import Servicereport from './pages/Report/ServiceReport';
import CustomerReport from './pages/Report/CustomerReport';
import InfoManage from './pages/Manage/InfoManage';
import ListCollaborator from './pages/Manage/Collaborator';
import AddCollaborator from './pages/Manage/Collaborator/Add';
import RatingsCollaborators from './pages/Manage/Collaborator/Ratings';
import DetailRatingsCollaborators from './pages/Manage/Collaborator/Detail';
=======
import Warranty from './pages/Warranty';
import InfoCustomer from './pages/Warranty/InfoCustomer';
import ServiceCustomer from './pages/Warranty/ServiceCustomer';
>>>>>>> origin/main

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path='/login' element={<Login />}></Route>

      <Route path='/' element={<Home />}>
        <Route path='/' element={<Navigate to='/customer-list' />} />
        <Route path='/customer-list' element={<Customer />} />
        <Route path='/add-customer' element={<AddCustomer />} />
        <Route path='/detail-customer/:id' element={<DetailCustomer />} />

        {/* // */}

        <Route path='/collaborator' element={<Collaborator />} />
        <Route path='/infomation' element={<Infomation />} />

        <Route path='/contract' element={<Contract />} />
        <Route path='/register-contract' element={<Registercontract />} />
        <Route path='/detail-regist-contract' element={<Detailregistcontract />} />

        <Route path='/ratings' element={<Ratings />} />
        <Route path='/detail-ratings' element={<Detailratings />} />

        {/* // */}
        <Route path='/report-customer' element={<CustomerReport />} />
        <Route path='/report-service' element={<Servicereport />} />
        <Route path='/report-finance' element={<Financialreport />} />

        {/* // */}

        <Route path='/infomation-manage' element={<InfoManage />}></Route>
        <Route path='/collaborators-list' element={<ListCollaborator />}></Route>
        <Route path='/collaborators-add' element={<AddCollaborator />}></Route>
        <Route path='/collaborators-ratings' element={<RatingsCollaborators />}></Route>
        <Route path='/detail-ratingsCollaborators' element={<DetailRatingsCollaborators />}></Route>
=======
      <Route path='/' element={<Home />}>
        <Route path='/' element={<Navigate to='/bao-hanh' />} />
        <Route path='/bao-hanh' element={<Warranty />}></Route>
        <Route path='/thong-tin' element={<InfoCustomer />}></Route>
        <Route path='/dich-vu-khach-hang' element={<ServiceCustomer />}></Route>
>>>>>>> origin/main
      </Route>
    </Routes>
  );
}

export default App;
