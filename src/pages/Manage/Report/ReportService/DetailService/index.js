import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../../utils/const';
import detailSerStyles from './detailService.module.scss';

const DetailService = () => {
  return (
    <div className={detailSerStyles['detailService']}>
      <Link to={'/report-service-manage'} className={detailSerStyles['detailService__arrow']}>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className={detailSerStyles['detailService__box']}>
        <div className={detailSerStyles['detailService__title']}>
          <span>Báo cáo chi tiết dịch vụ</span>
        </div>
        <div className={detailSerStyles['detailService__tools']}>
          <div className={detailSerStyles['detailService__filter']}>
            <select name=''>
              <option value='Dịch vụ'>Dịch vụ</option>
              <option value='Cắt mí'>Cắt mí</option>
              <option value='Nâng mũi'>Nâng mũi</option>
              <option value='Nâng ngực'>Nâng ngực</option>
              <option value='Hút mỡ'>Hút mỡ</option>
              <option value='Cấy mỡ'>Cấy mỡ</option>
              <option value='Tạo hình môi'>Tạo hình môi</option>
            </select>
          </div>
          <div className={detailSerStyles['detailService__filter']}>
            <select name=''>
              <option value='Khoảng thời gian'>Khoảng thời gian</option>
              <option value='7 ngày trước'>7 ngày trước</option>
              <option value='15 ngày trước'>15 ngày trước</option>
              <option value='1 tháng trước'>1 tháng trước</option>
            </select>
          </div>
          <div className={detailSerStyles['detailService__date']}>
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <button>Áp dụng</button>
          </div>
        </div>
        <div className={detailSerStyles['detailService__content']}>
          <p>
            Dịch vụ: <b>Cắt mí</b>
          </p>
          ...
        </div>
        <div className={detailSerStyles['detailService__group']}>
          <p>Tổng số ca dịch vụ</p>
          <p>
            <span>12 ca</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
