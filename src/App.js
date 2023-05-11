import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './layouts/Home';
import Collaborator from './pages/Collaborator';
import Contract from './pages/Collaborator/Contract';
import Detailratings from './pages/Collaborator/Detailratings';
import Detailregistcontract from './pages/Collaborator/Detailregistcontract';
import Infomation from './pages/Collaborator/Infomation';
import Ratings from './pages/Collaborator/Ratings';
import Registercontract from './pages/Collaborator/Registercontract';
import Resetpassword from './pages/Collaborator/Resetpassword';
import Customer from './pages/Customer';
import AddCustomer from './pages/Customer/Add';
import DetailCustomer from './pages/Customer/Detail';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>

      <Route path='/' element={<Home />}>
        <Route path='/' element={<Navigate to='/customer-list' />} />
        <Route path='/customer-list' element={<Customer />} />
        <Route path='/add-customer' element={<AddCustomer />} />
        <Route path='/detail-customer/:id' element={<DetailCustomer />} />

        {/* // */}

        <Route path='/collaborator' element={<Collaborator />} />
        <Route path='/infomation' element={<Infomation />} />
        <Route path='/resetpassword' element={<Resetpassword />} />

        <Route path='/contract' element={<Contract />} />
        <Route path='/registercontract' element={<Registercontract />} />
        <Route path='/detailregistcontract' element={<Detailregistcontract />} />

        <Route path='/ratings' element={<Ratings />} />
        <Route path='/detailratings' element={<Detailratings />} />
      </Route>
    </Routes>
  );
}

export default App;
