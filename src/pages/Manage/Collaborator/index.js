import { useState } from 'react';
import { Link } from 'react-router-dom';
import CollaboratorList from '../../../components/CollaboratorList';
import Pagination from '../../../components/Pagination';
import { collaboratosList } from '../../../routes/route';
import { PUBLIC_URL } from '../../../utils/const';
import CollStyles from './collaborators.module.scss';

const ListCollaborator = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={CollStyles['collaborators']}>
      <div className={CollStyles['collaborators__add']}>
        <Link to={'/collaborators-add'} className={CollStyles['collaborators__button']}>
          + Thêm Cộng tác viên
        </Link>
        <Link to={'/collaborators-ratings'} className={CollStyles['collaborators__button']}>
          Hạng Cộng tác viên
        </Link>
      </div>
      <div className={CollStyles['collaborators__box']}>
        <div className={CollStyles['collaborators__title']}>
          <span>Danh sách Cộng tác viên</span>
        </div>
        <div className={CollStyles['collaborators__tools']}>
          <div className={CollStyles['collaborators__search']}>
            <input onChange={handleSearch} value={search} name='search' type='text' placeholder='Tìm kiếm ...' />
            <button>
              <img src={`${PUBLIC_URL}/icons/search.png`} alt='' />
            </button>
          </div>
          <div className={CollStyles['collaborators__filter']}>
            <select name='filter' onChange={handleFilter} value={filter}>
              <option value='Nhóm Cộng tác viên'>Nhóm Cộng tác viên</option>
              <option value='Kí hợp đồng'>Kí hợp đồng</option>
              <option value='Không kí hợp đồng'>Không kí hợp đồng</option>
            </select>
          </div>
        </div>
        <div className={CollStyles['collaborators__content']}>
          <table className={CollStyles['table']}>
            <tbody>
              <tr>
                <th>Mã CTV</th>
                <th>Tên CTV</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Nhóm CTV</th>
                <th>Hạng CTV</th>
              </tr>
              {collaboratosList.map((item) => (
                <CollaboratorList key={item.name} {...item} />
              ))}
            </tbody>
          </table>
          <div className={CollStyles['collaborators__pagination']}>
            <Pagination pageCount={10} pageNum={10} range={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCollaborator;
