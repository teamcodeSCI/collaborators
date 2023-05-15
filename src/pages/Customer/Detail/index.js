import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../utils/const';
import './detailCustomer.scss';

const DetailCustomer = () => {
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const idCustomer = pathArr[pathArr.length - 1];
  console.log('location: ', idCustomer);
  return (
    <div className='detailCustomer'>
      <div className='detailCustomer__delete'>
        <Link to={'/customer-list'} className='detailCustomer__arrow'>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
          Quay lại
        </Link>
        <button className='detailCustomer__button'>Xóa khách hàng</button>
      </div>
      <div className='detailCustomer__box'>
        <div className='detailCustomer__title'>
          <span>Thông tin cá nhân</span>
          <div className='detailCustomer__edit'>Cập nhật</div>
        </div>
        <div className='detailCustomer__content'>
          <div className='detailCustomer__info'>
            <table className='table'>
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
                  <th>Địa chỉ:</th>
                  <td>Hà Nội</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='detailCustomer__info'>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Nhóm khách hàng:</th>
                  <td>Đến cửa</td>
                </tr>
                <tr>
                  <th>Mã khách hàng:</th>
                  <td>kn123</td>
                </tr>
                <tr>
                  <th>Ngày làm dịch vụ:</th>
                  <td>07/07/2021</td>
                </tr>
                <tr>
                  <th>Mô tả:</th>
                  <td>.......</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='detailCustomer__box'>
        <div className='detailCustomer__title'>
          <span>Thông tin dịch vụ</span>
        </div>
        <div className='detailCustomer__service'>
          <table className='table'>
            <tbody>
              <tr>
                <th>Dịch vụ</th>
                <th>Doanh thu</th>
              </tr>
              <tr>
                <td>Cắt mí plasma</td>
                <td>10.000.000</td>
              </tr>
              <tr>
                <td>Nâng mũi</td>
                <td>40.000.000</td>
              </tr>
              <tr>
                <td>Nâng ngực</td>
                <td>70.000.000</td>
              </tr>
              <tr>
                <td>Hút mỡ bụng</td>
                <td>30.000.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='detailCustomer__group'>
          <button>
            Tổng doanh thu : <b>135 triệu</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCustomer;
