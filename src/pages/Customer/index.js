import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import Pagination from '../../components/Pagination';
import './customer.scss';

const Customer = () => {
  return (
    <div className='customer'>
      <div className='customer__add'>
        <Link to={'/add-customer'} className='customer__button'>
          + Thêm khách hàng
        </Link>
      </div>
      <div className='customer__box'>
        <div className='customer__title'>
          <span>Tất cả khách hàng</span>
        </div>
        <div className='customer__tools'>
          <div className='customer__search'>
            <input type='text' placeholder='Tìm kiếm theo mã khách hàng tên khách hàng số điện thoại ...' />
            <button type='submit'>
              <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
            </button>
          </div>
          <div className='customer__filter'>
            <select name=''>
              <option value='Tất cả khách hàng'>Tất cả khách hàng</option>
              <option value='Đến cửa'>Đến cửa</option>
              <option value='Thành công'>Thành công</option>
              <option value='Không thành công'>Không thành công</option>
            </select>
          </div>
        </div>
        <div className='customer__content'>
          <table class='table'>
            <tbody>
              <tr>
                <th>Mã KH</th>
                <th>Tên KH</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Nhóm KH</th>
                <th>Ngày tạo</th>
              </tr>
              <tr>
                <td className='customer__line'>
                  <Link to={'/detail-customer'}>kn123</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Nguyễn Hạ Vy</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>0987654321</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Hà Nội</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Không thành công</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>01/02/2022</Link>
                </td>
              </tr>
              <tr>
                <td className='customer__line'>
                  <Link to={'/detail-customer'}>kn123</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Nguyễn Hạ Vy</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>0987654321</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Hà Nội</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Không thành công</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>01/02/2022</Link>
                </td>
              </tr>
              <tr>
                <td className='customer__line'>
                  <Link to={'/detail-customer'}>kn123</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Nguyễn Hạ Vy</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>0987654321</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Hà Nội</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Không thành công</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>01/02/2022</Link>
                </td>
              </tr>
              <tr>
                <td className='customer__line'>
                  <Link to={'/detail-customer'}>kn123</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Nguyễn Hạ Vy</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>0987654321</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Hà Nội</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>Không thành công</Link>
                </td>
                <td>
                  <Link to={'/detail-customer'}>01/02/2022</Link>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='customer__pagination'>
            <Pagination pageCount={10} pageNum={10} range={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
