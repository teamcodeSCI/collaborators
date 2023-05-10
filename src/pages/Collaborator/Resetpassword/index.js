import React from 'react';
import './resetpassword.scss';

const Resetpassword = () => {
  return (
    <div className='resetpassword'>
      <div className='resetpassword__box'>
        <div className='resetpassword__title'>
          <span>Đặt lại mật khẩu</span>
        </div>
        <div className='resetpassword__content'>
          <div className='resetpassword__group'>
            <label>Nhập mật khẩu cũ</label>
            <input type='text' value='' />
          </div>
          <div className='resetpassword__group'>
            <label>
              Nhập mật khẩu mới <span>*</span>
            </label>
            <input type='text' value='' />
          </div>
          <div className='resetpassword__group'>
            <label>
              Nhập lại mật khẩu <span>*</span>
            </label>
            <input type='text' value='' />
          </div>
          <div className='resetpassword__submit'>
            <button className='resetpassword__button'>Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
