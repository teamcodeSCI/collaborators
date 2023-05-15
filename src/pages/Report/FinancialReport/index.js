import React from 'react';
import './financialreport.scss';

const Financialreport = () => {
  return (
    <div className='financialreport'>
      <div className='financialreport__box'>
        <div className='financialreport__title'>
          <span>Báo cáo tài chính</span>
        </div>
        <div className='financialreport__tools'>
          <div className='financialreport__filter'>
            <select name=''>
              <option value='Khoảng thời gian'>Khoảng thời gian</option>
              <option value='Đến cửa'>1 ngày trước</option>
              <option value='Thành công'>7 ngày trước</option>
              <option value='Không thành công'>1 tháng trước</option>
            </select>
          </div>
          <div className='financialreport__date'>
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <button>Áp dụng</button>
          </div>
        </div>
        <div className='financialreport__content'>
          <table className='table'>
            <tbody>
              <tr>
                <th>Mã khách hàng</th>
                <th>Tên khách hàng</th>
                <th>Doanh thu</th>
                <th>Hoa hồng</th>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
              <tr>
                <td>kn123</td>
                <td>Nguyễn Hạ Vy</td>
                <td>10.000.000</td>
                <td>100.000</td>
              </tr>
            </tbody>
          </table>
          <div className='financialreport__group'>
            <table className='table'>
              <tbody>
                <tr>
                  <td></td>
                  <td>Tổng</td>
                  <td>4.000.000.000</td>
                  <td>100.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financialreport;
