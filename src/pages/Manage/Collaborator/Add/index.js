import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../../components/Input';
import { PUBLIC_URL } from '../../../../utils/const';
import AddCollStyles from './addCollaborator.module.scss';
const data = {
  name: '',
  phone: '',
  email: '',
  address: '',
  emaill: '',
  gender: '',
  desiderate: '',
  age: '',
};
const AddCollaborator = () => {
  const [info, setInfo] = useState(data);
  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div className={AddCollStyles['addCollaborator']}>
      <Link to={'/collaborators-list'} className={AddCollStyles['addCollaborator__arrow']}>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className={AddCollStyles['addCollaborator__box']}>
        <div className={AddCollStyles['addCollaborator__title']}>
          <span>Thêm mới Cộng tác viên</span>
        </div>
        <div className={AddCollStyles['addCollaborator__content']}>
          <Input name='name' title={'Họ và tên'} value={info.name} handleValue={handleInfo} require={true} />
          <Input name='phone' title={'Số điện thoại'} value={info.phone} handleValue={handleInfo} require={true} />
          <Input name='address' title={'Địa chỉ'} value={info.address} handleValue={handleInfo} require={true} />
          <Input name='email' title={'Email'} value={info.email} handleValue={handleInfo} require={true} />
          <Input name='age' title={'Tuổi'} value={info.age} handleValue={handleInfo} require={true} />

          <div className={AddCollStyles['addCollaborator__group']}>
            <label>
              Giới tính<span>*</span>
            </label>
            <div className={AddCollStyles['addCollaborator__gender']}>
              <div className={AddCollStyles['addCollaborator__men']}>
                <input id='man' name='gender' type='radio' value='Nam' onChange={handleInfo} />
                <label htmlFor='man'>Nam</label>
              </div>
              <div className={AddCollStyles['addCollaborator__men']}>
                <input id='woman' name='gender' type='radio' value='Nữ' onChange={handleInfo} />
                <label htmlFor='woman'>Nữ</label>
              </div>
              <div className={AddCollStyles['addCollaborator__men']}>
                <input id='other' name='gender' type='radio' value='Khác' onChange={handleInfo} />
                <label htmlFor='other'>Khác</label>
              </div>
            </div>
          </div>
        </div>
        <div className={AddCollStyles['addCollaborator__submit']}>
          <button className={AddCollStyles['addCollaborator__button']}>Thêm mới</button>
        </div>
      </div>
    </div>
  );
};

export default AddCollaborator;
