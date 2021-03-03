import React from 'react';
import SelectBox from '../../UI/selectbox';
import './styles.scss'


function Sort(props) {

  const sortBy = [
    { value: '', label: 'Giá' },
    { value: 'lowestprice', label: 'Giá từ thấp đến cao' },
    { value: 'highestprice', label: 'Giá từ cao đến thấp' }
  ];


  return (
    <div className="sort-container">
      <span className="sort-heading">Sắp xếp theo</span>
      <SelectBox options={sortBy} />
    </div>
  );
}

export default Sort;