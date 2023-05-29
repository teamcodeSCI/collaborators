import React from 'react';
import { useNavigate } from 'react-router-dom';
import './customerlist.scss';
import { BASE_URL } from '../../utils/const';
const CustomerList = (props) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail-customer/${props.id}`);
  };
  return (
    <tr className='customerlist' onClick={handleDetail}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.address}</td>
      <td>{props.group}</td>
      <td>{props.created_at}</td>
    </tr>
  );
};

export default CustomerList;
