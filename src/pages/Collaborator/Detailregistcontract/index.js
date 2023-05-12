import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './detailregistcontract.scss';

const Detailregistcontract = () => {
  return (
    <div className='detailregistcontract'>
      <Link to={'/contract'} className='detailregistcontract__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className='detailregistcontract__box'>
        <div className='detailregistcontract__title'>
          <span>Đăng ký hợp đồng</span>
          <p>Vui lòng điền thông tin chính xác</p>
        </div>
        <div className='detailregistcontract__content'>
          <div className='detailregistcontract__group'>
            <label>
              Họ và tên<span>*</span>
            </label>
            <input type='text' value='Phạm Thanh Hoa' />
          </div>
          <div className='detailregistcontract__group'>
            <label>
              Số điện thoại <span>*</span>
            </label>
            <input type='text' value='0987654321' />
          </div>
          <div className='detailregistcontract__group'>
            <label>Email</label>
            <input type='email' value='hoa@gmail.com' />
          </div>
          <div className='detailregistcontract__group'>
            <label>Địa chỉ</label>
            <input type='text' value='Hà Nội' />
          </div>
          <div className='detailregistcontract__group'>
            <label>Giới tính</label>
            <input type='text' value='Nữ' />
          </div>
          <div className='detailregistcontract__group'>
            <label>
              Cam kết doanh số / tháng <span>*</span>
            </label>
            <input type='text' value='500.000.000' />
          </div>
          <div className='detailregistcontract__group'>
            <label>CCCD</label>
            <input type='text' value='124636472674' />
          </div>
        </div>
        <div className='detailregistcontract__submit'>
          <button className='detailregistcontract__button'>Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Detailregistcontract;
