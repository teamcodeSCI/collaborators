import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './addCustomer.scss';

const AddCustomer = () => {
  return (
    <div className='addCustomer'>
      <Link to={'/customer-list'} className='addCustomer__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className='addCustomer__box'>
        <div className='addCustomer__title'>
          <span>Thêm mới khách hàng</span>
        </div>
        <div className='addCustomer__content'>
          <div className='addCustomer__group'>
            <label>
              Họ tên KH <span>*</span>
            </label>
            <input type='text' value='' />
          </div>
          <div className='addCustomer__group'>
            <label>
              Điểm đau (mong muốn) <span>*</span>
            </label>
            <input type='text' value='' />
          </div>
          <div className='addCustomer__group'>
            <label>Số điện thoại</label>
            <input type='text' value='' />
          </div>
          <div className='addCustomer__group'>
            <label>Địa chỉ</label>
            <input type='text' value='' />
          </div>
          <div className='addCustomer__group'>
            <label>Tuổi</label>
            <input type='text' value='' />
          </div>
          <div className='addCustomer__group'>
            <label>
              Giới tính<span>*</span>
            </label>
            <div className='addCustomer__gender'>
              <div className='addCustomer__men'>
                <input name='gender' type='radio' value='Nam' />
                Nam
              </div>
              <div className='addCustomer__men'>
                <input name='gender' type='radio' value='Nam' />
                Nữ
              </div>
              <div className='addCustomer__men'>
                <input name='gender' type='radio' value='Nam' />
                Khác
              </div>
            </div>
          </div>
        </div>
        <div className='addCustomer__submit'>
          <button className='addCustomer__button'>Thêm mới</button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
