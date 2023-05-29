import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../../utils/const';
import DetailRatingsCollStyles from './detailRatingsCollaborators.module.scss';

const DetailRatingsCollaborators = () => {
  return (
    <div className={DetailRatingsCollStyles['detailRatingsCollaborators']}>
      <Link to={'/collaborators-ratings'} className={DetailRatingsCollStyles['detailRatingsCollaborators__arrow']}>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className={DetailRatingsCollStyles['detailRatingsCollaborators__box']}>
        <div className={DetailRatingsCollStyles['detailRatingsCollaborators__title']}>Thông tin chung</div>
        <div className={DetailRatingsCollStyles['detailRatingsCollaborators__content']}>
          <div className={DetailRatingsCollStyles['detailRatingsCollaborators__input']}>
            <label>Tên hạng</label>
            <input type='text' value='Hạng A' disabled />
          </div>
          <div className={DetailRatingsCollStyles['detailRatingsCollaborators__input']}>
            <label>Số tiền hạn mức</label>
            <input type='text' value='500.000.000' disabled />
          </div>
        </div>
      </div>
      <div className={DetailRatingsCollStyles['detailRatingsCollaborators__box']}>
        <div className={DetailRatingsCollStyles['detailRatingsCollaborators__title']}>Ưu đãi theo hạng thẻ</div>
        <div className={DetailRatingsCollStyles['detailRatingsCollaborators__content']}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime maiores, temporibus commodi ratione id nam
            rerum accusantium voluptate officia impedit vero, beatae, odit nulla repudiandae adipisci quidem explicabo!
            Repudiandae, accusamus.
          </p>
        </div>
      </div>
      <div className={DetailRatingsCollStyles['detailRatingsCollaborators__box']}>
        <div className={DetailRatingsCollStyles['detailRatingsCollaborators__title']}>Mô tả quyền lợi hạng thẻ</div>
        <div className={DetailRatingsCollStyles['detailRatingsCollaborators__content']}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, eum. Architecto quidem ex aspernatur
            obcaecati eum nam deleniti iste dolores, atque delectus laudantium ipsam non soluta. Reiciendis deleniti
            nobis laudantium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailRatingsCollaborators;
