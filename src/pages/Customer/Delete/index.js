import React from 'react';
import './deleteCustomer.scss';
const DeleteCustomer = () => {
  return (
    <div className='deleteCustomer'>
      <div className='deleteCustomer__content'>
        <p>Bạn có chắc chắn xóa khách hàng này?</p>
        <div className='deleteCustomer__btn'>
          <button className='deleteCustomer__yes'>Có</button>
          <button className='deleteCustomer__no'>Không</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomer;
