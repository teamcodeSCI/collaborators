import React from 'react';
import reportRevStyles from './reportRevenue.module.scss';

const ReportRevenue = () => {
  return (
    <div className={reportRevStyles['reportRevenue']}>
      <div className={reportRevStyles['reportRevenue__box']}>
        <div className={reportRevStyles['reportRevenue__title']}>
          <span>Báo cáo doanh thu của nhóm</span>
        </div>
        <div className={reportRevStyles['reportRevenue__tools']}>
          <div className={reportRevStyles['reportRevenue__filter']}>
            <select name=''>
              <option value='Khoảng thời gian'>Khoảng thời gian</option>
              <option value='7 ngày trước'>7 ngày trước</option>
              <option value='15 ngày trước'>15 ngày trước</option>
              <option value='1 tháng trước'>1 tháng trước</option>
            </select>
          </div>
          <div className={reportRevStyles['reportRevenue__date']}>
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <button>Áp dụng</button>
          </div>
        </div>
        <div className={reportRevStyles['reportRevenue__content']}>
          ....
          <div className={reportRevStyles['reportRevenue__group']}>
            <p>Tổng số thu về</p>
            <p>
              <span>460.000.000 đ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportRevenue;
