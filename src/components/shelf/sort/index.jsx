import React from 'react';
import { useDispatch } from 'react-redux';
import updateSort from '../../../services/sort/action';
import SelectBox from '../../UI/selectbox';
import './styles.scss'


function Sort() {
  const dispatch = useDispatch();

  const sortBy = [
    { value: '', label: 'Giá' },
    { value: 'lowestprice', label: 'Giá từ thấp đến cao' },
    { value: 'highestprice', label: 'Giá từ cao đến thấp' }
  ];

  function handleSort (value){
    dispatch(updateSort(value));
  }

  return (
    <div className="sort-container">
      <span className="sort-heading">Sắp xếp theo</span>
      <SelectBox options={sortBy} handleSort={handleSort} />
    </div>
  );
}

export default Sort;