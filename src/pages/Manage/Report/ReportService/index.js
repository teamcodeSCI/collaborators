import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../utils/const';
import reportSerStyles from './reportService.module.scss';

const ReportService = () => {
  return (
    <div className={reportSerStyles['reportService']}>
      <div className={reportSerStyles['reportService__title']}>
        <span>Thông tin</span>
      </div>
      <div className={reportSerStyles['reportService__box']}>
        <div className={reportSerStyles['reportService__content']}>
          <Link to={'/report-total-service-manage'} className={reportSerStyles['reportService__item']}>
            <img src={`${PUBLIC_URL}/icons/report2.svg`} alt='' />
            <p>Báo cáo tổng số dịch vụ</p>
          </Link>
          <div className={reportSerStyles['reportService__item']}>
            <img src={`${PUBLIC_URL}/icons/report2.svg`} alt='' />
            <p>Báo cáo dịch vụ chi tiết</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportService;
