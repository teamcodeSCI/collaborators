import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './detailratings.scss';

const Detailratings = () => {
  return (
    <div className='detailratings'>
      <Link to={`/ratings`} className='detailratings__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>

      <div className='detailratings__box'>
        <div className='detailratings__title'>
          <span>Hạng A </span> Doanh số: 500.000.000
        </div>
        <div className='detailratings__table'>
          <table className='table'>
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
