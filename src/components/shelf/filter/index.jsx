import React from 'react';
import { useDispatch } from 'react-redux';
import updateFilter from '../../../services/filter/action';
import { sizeFilters } from "../../../services/utils/sizeFilters";
import CheckBox from '../../UI/checkbox';
import './styles.scss';

function Filter() {
  const dispatch = useDispatch();
  const getFilters = () => {
    const filterElements = document.querySelectorAll('input[name="size"]:checked');
    return Array.from(filterElements).map((element) => element.value);
  }
  function handleUpdateFilters() {
    console.log();
    dispatch(updateFilter(getFilters()));
  }

  function createCheckBoxes() {
    return sizeFilters.map((size) => (
      <CheckBox key={size} name="size" value={size} />
    ))
  }

  return (
    <div>
      <div className="filter-header">
        <p className="filter-name">Sizes:</p>
      </div>
      <form id="filter-form" onChange={handleUpdateFilters}>
        {createCheckBoxes()}
      </form>
    </div>
  );
}

export default Filter;