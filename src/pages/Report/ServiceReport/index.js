import React from 'react';
import './servicereport.scss';

const Servicereport = () => {
  return (
    <div className='servicereport'>
      <div className='servicereport__box'>
        <div className='servicereport__title'>
          <span>Báo cáo dịch vụ</span>
        </div>
        <div className='servicereport__tools'>
          <div className='servicereport__filter'>
            <select name=''>
              <option value='Khoảng thời gian'>Khoảng thời gian</option>
              <option value='Đến cửa'>1 ngày trước</option>
              <option value='Thành công'>7 ngày trước</option>
              <option value='Không thành công'>1 tháng trước</option>
            </select>
          </div>
          <div className='servicereport__date'>
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <input type='date' name='txtDate' id='txtDate' min='2000-01-01' />
            <button>Áp dụng</button>
          </div>
        </div>
        <div className='servicereport__content'>
          <table className='table'>
            <tbody>
              <tr>
                <th>Dịch vụ</th>
                <th>Số lượng</th>
                <th>Doanh thu</th>
              </tr>
              <tr>
                <td>Cắt mí plasma</td>
                <td>1</td>
                <td>10.000.000</td>
              </tr>
              <tr>
                <td>Nâng ngực</td>
                <td>1</td>
                <td>30.000.000</td>
              </tr>
              <tr>
                <td>Nâng mũi</td>
                <td>2</td>
                <td>60.000.000</td>
              </tr>
              <tr>
                <td>Cắt mí plasma</td>
                <td>1</td>
                <td>10.000.000</td>
              </tr>
              <tr>
                <td>Nâng ngực</td>
                <td>1</td>
                <td>30.000.000</td>
              </tr>
              <tr>
                <td>Nâng mũi</td>
                <td>2</td>
                <td>60.000.000</td>
              </tr>
              <tr>
                <td>Cắt mí plasma</td>
                <td>1</td>
                <td>10.000.000</td>
              </tr>
              <tr>
                <td>Nâng ngực</td>
                <td>1</td>
                <td>30.000.000</td>
              </tr>
              <tr>
                <td>Nâng mũi</td>
                <td>2</td>
                <td>60.000.000</td>
              </tr>
            </tbody>
          </table>
          <div className='servicereport__group'>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Tổng</td>
                  <td>4</td>
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

export default Servicereport;
