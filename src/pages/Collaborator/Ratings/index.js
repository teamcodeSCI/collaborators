import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './ratings.scss';

const Ratings = () => {
  return (
    <div className='ratings'>
      <Link to={'/collaborator'} className='ratings__arrow'>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className='ratings__name'>Hạng thẻ thành viên</div>
      <div className='ratings__box'>
        <div className='ratings__content'>
          <table className='table'>
            <tbody>
              <tr>
                <th>Hạng thành viên</th>
                <th>Doanh số</th>
                <th>Hoa hồng</th>
              </tr>
              <tr>
                <td>Hạng A</td>
                <td>500.000.000</td>
                <td>
                  <Link to={'/detail-ratings'}>
                    <img src={`${PUBLIC_URL}/icons/pen.svg`} alt='' />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Hạng B</td>
                <td>400.000.000</td>
                <td>
                  <Link to={'/detail-ratings'}>
                    <img src={`${PUBLIC_URL}/icons/pen.svg`} alt='' />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Hạng C</td>
                <td>300.000.000</td>
                <td>
                  <Link to={'/detail-ratings'}>
                    <img src={`${PUBLIC_URL}/icons/pen.svg`} alt='' />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Hạng D</td>
                <td>200.000.000</td>
                <td>
                  <Link to={'/detail-ratings'}>
                    <img src={`${PUBLIC_URL}/icons/pen.svg`} alt='' />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
