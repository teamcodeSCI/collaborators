import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../utils/const';
import RatingsCollStyles from './ratingsCollaborators.module.scss';

const RatingsCollaborators = () => {
  return (
    <div className={RatingsCollStyles['ratingsCollaborators']}>
      <Link to={'/collaborators-list'} className={RatingsCollStyles['ratingsCollaborators__arrow']}>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className={RatingsCollStyles['ratingsCollaborators__box']}>
        <div className={RatingsCollStyles['ratingsCollaborators__content']}>
          <table className={RatingsCollStyles['table table-bordered']}>
            <tbody>
              <tr>
                <th>Danh sách hạng CTV</th>
                <th>CTV</th>
                <th></th>
              </tr>
              <tr>
                <td className={RatingsCollStyles['ratingsCollaborators__img']}>
                  <img src={`${PUBLIC_URL}/icons/hanga.svg`} alt='' />
                  Hạng A
                </td>
                <td>2</td>
                <td>
                  <Link to={'/detail-ratingsCollaborators'}>
                    <img src={`${PUBLIC_URL}/icons/pen.svg`} alt='' />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={RatingsCollStyles['ratingsCollaborators__img']}>
                  <img src={`${PUBLIC_URL}/icons/hangb.svg`} alt='' />
                  Hạng B
                </td>
                <td>3</td>
                <td>
                  <Link to={'/detail-ratingsCollaborators'}>
                    <img src={`${PUBLIC_URL}/icons/pen.svg`} alt='' />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={RatingsCollStyles['ratingsCollaborators__img']}>
                  <img src={`${PUBLIC_URL}/icons/hangc.svg`} alt='' />
                  Hạng C
                </td>
                <td>4</td>
                <td>
                  <Link to={'/detail-ratingsCollaborators'}>
                    <img src={`${PUBLIC_URL}/icons/pen.svg`} alt='' />
                  </Link>
                </td>
              </tr>
              <tr>
                <td className={RatingsCollStyles['ratingsCollaborators__img']}>
                  <img src={`${PUBLIC_URL}/icons/hangd.svg`} alt='' />
                  Hạng D
                </td>
                <td>1</td>
                <td>
                  <Link to={'/detail-ratingsCollaborators'}>
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

export default RatingsCollaborators;
