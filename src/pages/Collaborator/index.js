import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './collaborator.scss';

const Collaborator = () => {
  return (
    <div className='collaborator'>
      <div className='collaborator__title'>
        <span>Thông tin</span>
      </div>
      <div className='collaborator__box'>
        <div className='collaborator__content'>
          <Link to={`/infomation`} className='collaborator__item'>
            <img src={`${PUBLIC_URL}/icons/info.svg`} alt='' />
            <p>Thông tin tài khoản</p>
          </Link>
          <Link to={`/contract`} className='collaborator__item'>
            <img src={`${PUBLIC_URL}/icons/contract.svg`} alt='' />
            <p>Hợp đồng</p>
          </Link>
          <Link to={`/ratings`} className='collaborator__item'>
            <img src={`${PUBLIC_URL}/icons/ratings.svg`} alt='' />
            <p>Hạng thành viên</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
