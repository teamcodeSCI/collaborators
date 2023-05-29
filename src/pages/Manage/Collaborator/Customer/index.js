import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination';
import { PUBLIC_URL } from '../../../../utils/const';
import CustomerCollStyles from './customerCollaborator.module.scss';

const CustomerCollaborators = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={CustomerCollStyles['customerCollaborator']}>
      <Link to={'/detail-collaborators'} className={CustomerCollStyles['customerCollaborator__arrow']}>
        <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt='' />
        Quay lại
      </Link>
      <div className={CustomerCollStyles['customerCollaborator__box']}>
        <div className={CustomerCollStyles['customerCollaborator__title']}>
          <span>
            Khách hàng của CTV <b>Nguyễn Văn A</b>
          </span>
        </div>
        <div className={CustomerCollStyles['customerCollaborator__tools']}>
          <div className={CustomerCollStyles['customerCollaborator__search']}>
            <input onChange={handleSearch} value={search} name='search' type='text' placeholder='Tìm kiếm ...' />
            <button>
              <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
            </button>
          </div>
          <div className={CustomerCollStyles['customerCollaborator__filter']}>
            <select name='filter' onChange={handleFilter} value={filter}>
              <option value='Tất cả khách hàng'>Tất cả khách hàng</option>
              <option value='Đến cửa'>Đến cửa</option>
              <option value='Thành công'>Thành công</option>
              <option value='Không thành công'>Không thành công</option>
            </select>
          </div>
        </div>
        <div className={CustomerCollStyles['customerCollaborator__content']}>
          <table className={CustomerCollStyles['table']}>
            <tbody>
              <tr>
                <th>Mã KH</th>
                <th>Tên KH</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Nhóm KH</th>
              </tr>
              <tr>
                <td>123</td>
                <td>Đào Thị A</td>
                <td>0987654321</td>
                <td>Quảng Ninh</td>
                <td>Đã đến cửa</td>
              </tr>
              <tr>
                <td>123</td>
                <td>Đào Thị A</td>
                <td>0987654321</td>
                <td>Quảng Ninh</td>
                <td>Đã đến cửa</td>
              </tr>
              <tr>
                <td>123</td>
                <td>Đào Thị A</td>
                <td>0987654321</td>
                <td>Quảng Ninh</td>
                <td>Đã đến cửa</td>
              </tr>
            </tbody>
          </table>
          <div className={CustomerCollStyles['customerCollaborator__pagination']}>
            <Pagination pageCount={10} pageNum={10} range={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCollaborators;
