import React from 'react';
import { useDispatch } from 'react-redux';
import updateFilter from '../../../services/filter/action';
import './styles.scss';

function Filter(props) {
  const dispatch = useDispatch();
  const getFilters = () => {
    const filterElements = document.querySelectorAll('input[name="size"]:checked');
    return Array.from(filterElements).map((element) => element.value);
  }
  function handleUpdateFilters (){
    dispatch(updateFilter(getFilters()));
  }
  return (
    <div>
      <div className="filter-header">
        <p className="filter-name">Sizes:</p>
      </div>
      <form id="filter-form" onChange={handleUpdateFilters}>
        <div className="available-size filters">
          <input type="checkbox" name="size" id="size-s" value="S"/>
          <span className="checkbox-name">Size S</span>
        </div>
        <div className="available-size filters">
          <input type="checkbox" name="size" id="size-m" value="M"/>
          <span className="checkbox-name">Size M</span>
        </div>
        <div className="available-size filters">
          <input type="checkbox" name="size" id="size-l" value="L"/>
          <span className="checkbox-name">Size L</span>
        </div>
        <div className="available-size filters">
          <input type="checkbox" name="size" id="size-xl" value="XL"/>
          <span className="checkbox-name">Size XL</span>
        </div>
        <div className="available-size filters">
          <input type="checkbox" name="size" id="size-xxl" value="XXL"/>
          <span className="checkbox-name">Size XXL</span>
        </div>
      </form>
    </div>
  );
}

export default Filter;