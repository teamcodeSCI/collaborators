import React from 'react';
import { PUBLIC_URL } from '../../../utils/const';
import './customerReport.scss';

const CustomerReport = () => {
  return (
    <div className='customerReport'>
      <div className='customerReport__box'>
        <div className='customerReport__title'>
          <span>Báo cáo khách hàng theo khoảng thời gian</span>
        </div>
        <div className='customerReport__tools'>
          <div className='customerReport__time'>
            <div className='customerReport__filter'>
              <select name='filter'>
                <option value='Khoảng thời gian'>Khoảng thời gian</option>
                <option value='7 ngày trước'>7 ngày trước</option>
                <option value='14 ngày trước'>14 ngày trước</option>
                <option value='30 ngày trước'>30 ngày trước</option>
              </select>
            </div>
            <div className='customerReport__date'>
              <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
              <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
              <button>Áp dụng</button>
            </div>
          </div>

          <div className='customerReport__cus'>
            <select name='filter'>
              <option value='Tổng số lượng khách hàng'>Tổng số lượng khách hàng</option>
              <option value='Khách hàng thực hiện lần đầu'>Khách hàng thực hiện lần đầu</option>
              <option value='Khách hàng quay lại'>Khách hàng quay lại</option>
              <option value='Khách hàng đến cửa'>Khách hàng đến cửa</option>
            </select>
          </div>
        </div>
        <div className='customerReport__content'></div>
        <div className='customerReport__total'>
          <p>Tổng số khách hàng thực hiện dịch vụ</p>
          <p>
            <b>46</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReport;
