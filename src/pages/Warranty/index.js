import React from 'react';
import './warranty.scss';

const warranty = () => {
  return (
    <div className='warranty'>
      <div className='warranty__box'>
        <div className='warranty__title'>
          <span>Thông tin cá nhân</span>
        </div>
        <div className='warranty__content'>
          <div className='warranty__info'>
            <table class='table'>
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
          <div className='warranty__info'>
            <table class='table'>
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
      <div className='warranty__box'>
        <div className='warranty__title'>
          <span>Thông tin dịch vụ</span>
        </div>
        <div className='warranty__service'>
          <table class='table'>
            <tbody>
              <tr>
                <th>Dịch vụ</th>
                <th>Doanh thu</th>
                <th>Ngày thực hiện</th>
                <th>Bảo hành</th>
              </tr>
              <tr>
                <td>Cắt mí plasma</td>
                <td>10.000.000</td>
                <td>02/02/2022</td>
                <td>30.04/2022</td>
              </tr>
              <tr>
                <td>Cắt mí plasma</td>
                <td>10.000.000</td>
                <td>02/02/2022</td>
                <td>30.04/2022</td>
              </tr>
              <tr>
                <td>Cắt mí plasma</td>
                <td>10.000.000</td>
                <td>02/02/2022</td>
                <td>30.04/2022</td>
              </tr>
              <tr>
                <td>Cắt mí plasma</td>
                <td>10.000.000</td>
                <td>02/02/2022</td>
                <td>30.04/2022</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='warranty__group'>
          <button>
            Tổng doanh thu : <b>135 triệu</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default warranty;
