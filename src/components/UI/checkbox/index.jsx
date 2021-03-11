import './styles.scss';

const CheckBox = ({ name, value }) => {

  return (
    <div className="available-size filters">
      <input id={value} type="checkbox" name={name} value={value} />
      <label htmlFor={value} className="checkbox-name">Size {value}</label>
    </div>
  );
}

export default CheckBox;