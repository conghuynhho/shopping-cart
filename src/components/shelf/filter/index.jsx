import React from 'react';
import './styles.scss'

function Filter(props) {
  return (
    <div>
      <div className="filter-header">
        <p className="filter-name">Nơi bán:</p>
      </div>
      <div className="available-size filters">
        <input type="checkbox" name="size" id="size-s" value="s"/>
        <span className="checkbox-name">Size S</span>
      </div>
      <div className="available-size filters">
        <input type="checkbox" name="size" id="size-m" value="m"/>
        <span className="checkbox-name">Size M</span>
      </div>
      <div className="available-size filters">
        <input type="checkbox" name="size" id="size-l" value="l"/>
        <span className="checkbox-name">Size L</span>
      </div>
      <div className="available-size filters">
        <input type="checkbox" name="size" id="size-xl" value="xl"/>
        <span className="checkbox-name">Size XL</span>
      </div>
    </div>
  );
}

export default Filter;