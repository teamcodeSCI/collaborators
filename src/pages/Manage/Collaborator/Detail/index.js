import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NoticeModal from '../../../../components/NoticeModal';
import { PUBLIC_URL } from '../../../../utils/const';
import DetailCusStyles from './detailCollaborator.module.scss';

const DetailCollaborator = () => {
  const [deleteModal, isDeleteModal] = useState(false);
  const handleIsDelete = () => {
    isDeleteModal(!deleteModal);
  };
  return (
    <>
      <div className={DetailCusStyles['detailCollaborator']}>
        <div className={DetailCusStyles['detailCollaborator__delete']}>
          <Link to={'/collaborators-list'} className={DetailCusStyles['detailCollaborator__arrow']}>
            <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
            Quay lại
          </Link>
          <button className={DetailCusStyles['detailCollaborator__button']} onClick={handleIsDelete}>
            Xóa cộng tác viên
          </button>
        </div>
        <div className={DetailCusStyles['detailCollaborator__box']}>
          <div className={DetailCusStyles['detailCollaborator__title']}>
            <span>Thông tin cá nhân</span>
            <div className={DetailCusStyles['detailCollaborator__edit']}>Cập nhật</div>
          </div>
          <div className={DetailCusStyles['detailCollaborator__content']}>
            <div className={DetailCusStyles['detailCollaborator__info']}>
              <table className={DetailCusStyles['table']}>
                <tbody>
                  <tr>
                    <th>Họ tên:</th>
                    <td>Nguyễn Hạ Vy</td>
                  </tr>
                  <tr>
                    <th>Ngày sinh:</th>
                    <td>07/07/2000</td>
                  </tr>
                  <tr>
                    <th>Giới tính:</th>
                    <td>Nữ</td>
                  </tr>
                  <tr>
                    <th>Số điện thoại:</th>
                    <td>0987654321</td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <td>vy@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Địa chỉ:</th>
                    <td>Hà Nội</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={DetailCusStyles['detailCollaborator__info']}>
              <table className={DetailCusStyles['table']}>
                <tbody>
                  <tr>
                    <th>Mã CTV:</th>
                    <td>kn123</td>
                  </tr>
                  <tr>
                    <th>Ngày vào:</th>
                    <td>07/07/2021</td>
                  </tr>
                  <tr>
                    <th>Nhóm CTV:</th>
                    <td>Kí hợp đồng</td>
                  </tr>
                  <tr>
                    <th>Doanh số:</th>
                    <td>500.000.000/tháng (không cam kết doanh số)</td>
                  </tr>
                  <tr>
                    <th>Hạng CTV:</th>
                    <td>Hạng A</td>
                  </tr>
                  <tr>
                    <th>Nguồn CTV:</th>
                    <td>KH cũ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={DetailCusStyles['detailCollaborator__list']}>
            <Link to={'/customer-collaborators'}>Danh sách khách hàng</Link>
          </div>
        </div>
      </div>
      {deleteModal && <NoticeModal message={'Bạn có chắc muốn xóa ?'} closeModal={handleIsDelete} />}
    </>
  );
};

export default DetailCollaborator;
