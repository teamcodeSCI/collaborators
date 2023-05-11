import React from 'react';
import { PUBLIC_URL } from '../../../utils/const';
import './detailratings.scss';

const Detailratings = () => {
  return (
    <div className='detailratings'>
      <div className='detailratings__name'>Chi tiết hoa hồng từng hạng thẻ</div>
      <div className='detailratings__box'>
        <div className='detailratings__title'>
          <span>Hạng A (Doanh số: 500.000.000)</span>
        </div>
        <div className='detailratings__content'>
          <table class='table'>
            <tbody>
              <tr>
                <th>Dịch vụ</th>
                <th>Hoa hồng</th>
              </tr>
              <tr>
                <td>Cắt mí</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Nâng mũi</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Nâng ngực</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Hút mỡ</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Xóa xăm</td>
                <td>10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Detailratings;
