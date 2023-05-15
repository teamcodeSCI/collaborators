import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './infomation.scss';

const Infomation = () => {
  return (
    <div className='infomation'>
      <Link to={'/collaborator'} className='addCustomer__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className='infomation__box'>
        <div className='infomation__title'>
          <span>Thông tin tài khoản</span>
          <p>Các thông tin cơ bản của tài khoản đang đăng nhập hệ thống</p>
        </div>
        <div className='infomation__content'>
          <div className='infomation__group'>
            <label>
              Họ và tên<span>*</span>
            </label>
            <input type='text' value='Phạm Thanh Hoa' disabled />
          </div>
          <div className='infomation__group'>
            <label>
              Số điện thoại <span>*</span>
            </label>
            <input type='text' value='0987654321' disabled />
          </div>
          <div className='infomation__group'>
            <label>Email</label>
            <input type='email' value='hoa@gmail.com' disabled />
          </div>
          <div className='infomation__group'>
            <label>Địa chỉ</label>
            <input type='text' value='Hà Nội' disabled />
          </div>
          <div className='infomation__group'>
            <label>Giới tính</label>
            <input type='text' value='Nữ' disabled />
          </div>
          <div className='infomation__group'>
            <label>
              Hạng thành viên <span>*</span>
            </label>
            <input type='text' value='Hạng A' disabled />
          </div>
          <div className='infomation__group'>
            <label>Quản lý trực tiếp</label>
            <input type='text' value='Nguyễn Văn B' disabled />
          </div>
          <div className='infomation__group'>
            <label>Ngày vào</label>
            <input type='text' value='22/01/2022' disabled />
          </div>
        </div>
        <div className='infomation__submit'>
          <Link to={'/reset-password'} className='infomation__pas'>
            Đổi mật khẩu
          </Link>
          <button className='infomation__button'>Cập nhật</button>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
