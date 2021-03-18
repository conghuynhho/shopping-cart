import React from 'react';
import PropTypes from 'prop-types';

SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
}

function SelectBox({options, handleSort}) {
  function handleOnChange(e) {
    handleSort(e.target.value);
  }
  const createOption = () => options.map((option) => (
    <option value={option.value} key={option.value}>{option.label}</option>
  ))
  
  return (
    <select name="name" onChange={handleOnChange}>
      {createOption(options)}
    </select>
  );
}

export default SelectBox;