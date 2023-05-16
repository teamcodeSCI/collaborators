import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
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
import Warranty from './pages/Warranty';
import Login from './pages/Login';
import Financialreport from './pages/Report/FinancialReport';
import Servicereport from './pages/Report/ServiceReport';
import CustomerReport from './pages/Report/CustomerReport';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/warranty' element={<Warranty />}></Route>

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
      </Route>
    </Routes>
  );
}

export default App;
