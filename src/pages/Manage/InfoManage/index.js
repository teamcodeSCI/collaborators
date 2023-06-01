import React, { useState } from 'react';
import Input from '../../../components/Input';
import './infoManage.scss';

const data = {
  name: 'Đào Hậu Hoàng',
  phone: '0987654321',
  email: 'kin@gmail.com',
  address: 'Hà Nội',
  gender: 'Nam',
  date: '22/01/2022',
};
const InfoManage = () => {
  const [isEditInfoManage, setIsEditInfoManage] = useState(true);
  const [infoManage, setInfoManage] = useState(data);
  const [password, setPassword] = useState({ password: '', newPassword: '', retypePassword: '' });
  const handleInfoManage = (e) => {
    setInfoManage({ ...infoManage, [e.target.name]: e.target.value });
  };
  const handlePassword = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const handleIsEditInfo = () => {
    setIsEditInfoManage(!isEditInfoManage);
  };
  return (
    <div className='infoManage'>
      <div className='infoManage__box'>
        <div className='infoManage__title'>
          <span>Thông tin tài khoản</span>
          <p>Các thông tin cơ bản của tài khoản đang đăng nhập hệ thống</p>
        </div>
        <div className='infoManage__content'>
          <Input
            name='name'
            title={'Họ và tên'}
            value={infoManage.name}
            handleValue={handleInfoManage}
            disable={isEditInfoManage}
            require={true}
          />
          <Input
            name='phone'
            title={'Số điện thoại'}
            value={infoManage.phone}
            handleValue={handleInfoManage}
            disable={isEditInfoManage}
            require={true}
          />
          <Input
            name='email'
            type='email'
            title={'Email'}
            value={infoManage.email}
            handleValue={handleInfoManage}
            disable={isEditInfoManage}
            require={false}
          />
          <Input
            name='address'
            title={'Địa chỉ'}
            value={infoManage.address}
            handleValue={handleInfoManage}
            disable={isEditInfoManage}
            require={false}
          />
          <Input
            name='gender'
            title={'Giới tính'}
            value={infoManage.gender}
            handleValue={handleInfoManage}
            disable={isEditInfoManage}
            require={false}
          />
          <Input
            name='date'
            title={'Ngày vào'}
            value={infoManage.date}
            handleValue={handleInfoManage}
            disable={isEditInfoManage}
            require={false}
          />
        </div>
        <div className='infoManage__submit'>
          {isEditInfoManage ? (
            <button className='infoManage__button' onClick={handleIsEditInfo}>
              Chỉnh sửa
            </button>
          ) : (
            <div className='infoManage__control'>
              <button className='infoManage__button' onClick={handleIsEditInfo}>
                Hủy bỏ
              </button>
              <button className='infoManage__button' onClick={handleIsEditInfo}>
                Cập nhật
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='infoManage__box'>
        <div className='infoManage__title'>
          <span>Đặt lại mật khẩu</span>
        </div>
        <div className='infoManage__content'>
          <Input
            name='password'
            title={'Mật khẩu cũ'}
            value={password.password}
            handleValue={handlePassword}
            disable={false}
            require={true}
          />
          <Input
            name='newPassword'
            title={'Mật khẩu mới'}
            value={password.newPassword}
            handleValue={handlePassword}
            disable={false}
            require={true}
          />
          <Input
            name='retypePassword'
            title={'Nhập lại mật khẩu'}
            value={password.retypePassword}
            handleValue={handlePassword}
            disable={false}
            require={true}
          />
        </div>
        <div className='infoManage__submit'>
          <button className='infoManage__button'>Cập nhật</button>
        </div>
      </div>
    </div>
  );
};

export default InfoManage;
