import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebarItem.scss';

const SidebarItem = (props) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const handleOpenDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  return (
    <>
      {props.dropdown.length === 0 ? (
        <Link to={props.link}>
          <div className='sidebarItem__text'>
            <img src={props.icon} alt='' />
            <span style={{ color: '#fff' }}>{props.name}</span>
          </div>
        </Link>
      ) : (
        <li>
          <div className='sidebarItem__text' onClick={handleOpenDropdown}>
            <img src={props.icon} alt='' />
            <span style={{ color: '#fff' }}>{props.name}</span>
            <b>ˇ</b>
          </div>
          {isDropdown && (
            <div class='sidebarItem__dropdown'>
              <ul>
                {props.dropdown.map((item) => (
                  <li>
                    <Link key={item.link} to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      )}
    </>
  );
};

export default SidebarItem;
