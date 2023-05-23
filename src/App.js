import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import Warranty from './pages/Warranty';
import InfoCustomer from './pages/Warranty/InfoCustomer';
import ServiceCustomer from './pages/Warranty/ServiceCustomer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/' element={<Navigate to='/bao-hanh' />} />
        <Route path='/bao-hanh' element={<Warranty />}></Route>
        <Route path='/thong-tin' element={<InfoCustomer />}></Route>
        <Route path='/dich-vu-khach-hang' element={<ServiceCustomer />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
