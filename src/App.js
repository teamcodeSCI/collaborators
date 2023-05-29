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
import { BASE_URL } from './utils/const';

function App() {
  return (
    <Routes>
      <Route path={`${BASE_URL}/login`} element={<Login />}></Route>
      <Route path={`${BASE_URL}/warranty`} element={<Warranty />}></Route>

      <Route path={`${BASE_URL}/`} element={<Home />}>
        <Route path={`${BASE_URL}/`} element={<Navigate to={`${BASE_URL}/customer-list`} />} />
        <Route path={`${BASE_URL}/customer-list`} element={<Customer />} />
        <Route path={`${BASE_URL}/add-customer`} element={<AddCustomer />} />
        <Route path={`${BASE_URL}/detail-customer/:id`} element={<DetailCustomer />} />

        {/* // */}

        <Route path={`${BASE_URL}/collaborator`} element={<Collaborator />} />
        <Route path={`${BASE_URL}/infomation`} element={<Infomation />} />

        <Route path={`${BASE_URL}/contract`} element={<Contract />} />
        <Route path={`${BASE_URL}/register-contract`} element={<Registercontract />} />
        <Route path={`${BASE_URL}/detail-regist-contract`} element={<Detailregistcontract />} />

        <Route path={`${BASE_URL}/ratings`} element={<Ratings />} />
        <Route path={`${BASE_URL}/detail-ratings`} element={<Detailratings />} />

        {/* // */}
        <Route path={`${BASE_URL}/report-customer`} element={<CustomerReport />} />
        <Route path={`${BASE_URL}/report-service`} element={<Servicereport />} />
        <Route path={`${BASE_URL}/report-finance`} element={<Financialreport />} />
      </Route>
    </Routes>
  );
}

export default App;
