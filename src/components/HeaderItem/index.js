import React from 'react';
import { Link } from 'react-router-dom';
import './headerItem.scss';
const HeaderItem = (props) => {
  return (
    <li className='headerItem__menu'>
      <Link to={props.link}>{props.name}</Link>
    </li>
  );
};

export default HeaderItem;
