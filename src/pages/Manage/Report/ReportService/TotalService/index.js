import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../../utils/const';
import totalSerStyles from './totalService.module.scss';

const TotalService = () => {
  return (
    <div className={totalSerStyles['totalService']}>
      <Link to={'/report-service-manage'} className={totalSerStyles['totalService__arrow']}>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className={totalSerStyles['totalService__box']}>
        <div className={totalSerStyles['totalService__title']}>
          <span>Báo cáo tổng số dịch vụ của nhóm</span>
        </div>
        <div className={totalSerStyles['totalService__content']}>
          <table className={totalSerStyles['table']}>
            <tbody>
              <tr>
                <th>STT</th>
                <th>Dịch vụ</th>
                <th>Số ca</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Nâng mũi</td>
                <td>3</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nâng ngực</td>
                <td>4</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cắt mí</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={totalSerStyles['totalService__group']}>
          <p>Tổng số ca dịch vụ</p>
          <p>
            <span>12 ca</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalService;
