import React, { useEffect, useState } from 'react';
import { PUBLIC_URL } from '../../utils/const';
import './login.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [info, setInfo] = useState({ email: '', password: '' });
  const [token, setToken] = useLocalStorage('token', null);
  const [notice, setNotice] = useState('');
  const navigate = useNavigate();
  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    if (info.email === '' || info.password === '') {
      setNotice('Vui lòng điền đủ thông tin');
      return;
    }
    if (info.email !== 'duc@gmail.com' || info.password !== '123456aA') {
      setNotice('Email hoặc mật khẩu không đúng');
      return;
    }
    setToken('hello');
    navigate('/');
  };
  useEffect(() => {
    if (token) navigate('/');
  }, [token, navigate]);
  return (
    <div className='login'>
      <div className='container'>
        <div className='login__box'>
          <div className='login__pic'>
            <img src={`${PUBLIC_URL}/images/login.jpg`} alt='' />
          </div>
          <div className='login__detail'>
            <div className='login__form'>
              <div className='login__title'>
                <span>ĐĂNG NHẬP</span>
              </div>
              <div className='login__input'>
                <label>Email người dùng </label>
                <input type='email' name='email' value={info.email} onChange={handleInfo} required />
              </div>
              <div className='login__input'>
                <label>Mật khẩu </label>
                <input type='password' name='password' value={info.password} onChange={handleInfo} required />
              </div>
              <div className='login__button'>
                <button onClick={handleLogin}>Đăng nhập</button>
                {notice === '' ? '' : <p>{notice}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
