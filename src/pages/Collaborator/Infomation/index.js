import React from 'react';
import { Link } from 'react-router-dom';
import './infomation.scss';

const Infomation = () => {
  return (
    <div className='infomation'>
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
            <input type='text' value='Phạm Thanh Hoa' />
          </div>
          <div className='infomation__group'>
            <label>
              Số điện thoại <span>*</span>
            </label>
            <input type='text' value='0987654321' />
          </div>
          <div className='infomation__group'>
            <label>Email</label>
            <input type='email' value='hoa@gmail.com' />
          </div>
          <div className='infomation__group'>
            <label>Địa chỉ</label>
            <input type='text' value='Hà Nội' />
          </div>
          <div className='infomation__group'>
            <label>Giới tính</label>
            <input type='text' value='Nữ' />
          </div>
          <div className='infomation__group'>
            <label>
              Hạng thành viên <span>*</span>
            </label>
            <input type='text' value='Hạng A' />
          </div>
          <div className='infomation__group'>
            <label>Quản lý trực tiếp</label>
            <input type='text' value='Nguyễn Văn B' />
          </div>
          <div className='infomation__group'>
            <label>Ngày vào</label>
            <input type='text' value='22/01/2022' />
          </div>
        </div>
        <div className='infomation__submit'>
          <Link to={'/resetpassword'} className='infomation__pas'>
            Đổi mật khẩu
          </Link>
          <button className='infomation__button'>Cập nhật</button>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
