import React from 'react';
import { Link } from 'react-router-dom';
const HeaderItem = (props) => {
  return (
    <>
      <Link to={props.link}>
        <li>{props.name}</li>
      </Link>
    </>
  );
};

export default HeaderItem;
