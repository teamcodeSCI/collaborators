import React from 'react';
import { Link } from 'react-router-dom';
import './registercontract.scss';

const Registercontract = () => {
  return (
    <div className='registercontract'>
      <div className='registercontract__box'>
        <div className='registercontract__title'>
          <span>Đăng ký hợp đồng</span>
        </div>
        <div className='registercontract__content'>
          <div className='registercontract__group'>
            <input type='text' value='Bạn chưa ký hợp đồng' />
          </div>
        </div>
        <div className='registercontract__submit'>
          <Link to={'/detailregistcontract'} className='registercontract__button'>
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registercontract;