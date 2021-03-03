import React from 'react';

function SelectBox({options}) {
  const createOption = () => options.map((option) => (
    <option value={option.value} key={option.value}>{option.label}</option>
  ))
  
  return (
    <select name="name">
      {createOption(options)}
    </select>
  );
}

export default SelectBox;