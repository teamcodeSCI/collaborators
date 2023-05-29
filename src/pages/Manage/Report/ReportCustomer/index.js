import React from 'react';
import reportCusStyles from './reportCustomer.module.scss';

const ReportCustomer = () => {
  return (
    <div className={reportCusStyles['reportCustomer']}>
      <div className={reportCusStyles['reportCustomer__box']}>
        <div className={reportCusStyles['reportCustomer__title']}>
          <span>Báo cáo số lượng khách hàng của nhóm</span>
        </div>
        <div className={reportCusStyles['reportCustomer__tools']}>
          <div className={reportCusStyles['reportCustomer__filter']}>
            <select name=''>
              <option value='Khoảng thời gian'>Khoảng thời gian</option>
              <option value='7 ngày trước'>7 ngày trước</option>
              <option value='15 ngày trước'>15 ngày trước</option>
              <option value='1 tháng trước'>1 tháng trước</option>
            </select>
          </div>
          <div className={reportCusStyles['reportCustomer__date']}>
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <button>Áp dụng</button>
          </div>
          <div className={reportCusStyles['reportCustomer__filter']}>
            <select name=''>
              <option value='Tổng số lượng khách hàng'>Tổng số lượng khách hàng</option>
              <option value='Số lượng kh làm lần đầu'>Số lượng kh làm lần đầu</option>
              <option value='Số lượng kh làm quay lại'>Số lượng kh làm quay lại</option>
              <option value='Số lượng kh làm đến cửa'>Số lượng kh làm đến cửa</option>
            </select>
          </div>
        </div>
        <div className={reportCusStyles['reportCustomer__content']}>
          ....
          <div className={reportCusStyles['reportCustomer__group']}>
            <p>
              Tổng số khách hàng thực hiện dịch vụ trong <b>7 ngày qua</b>
            </p>
            <p>
              <span>460 khách hàng</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCustomer;
