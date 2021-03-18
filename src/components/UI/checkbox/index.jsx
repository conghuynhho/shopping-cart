import './styles.scss';
import PropTypes from 'prop-types';


const CheckBox = ({ name, value }) => {

  return (
    <div className="available-size filters">
      <input id={value} type="checkbox" name={name} value={value} />
      <label htmlFor={value} className="checkbox-name">Size {value}</label>
    </div>
  );
}

CheckBox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}

export default CheckBox;