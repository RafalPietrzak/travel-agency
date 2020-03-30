import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionCheckboxes = ({
  values, setOptionValue, currentValue,
}) => { 
  const newValueSet = (currentValue, id, checked) => {
    if(checked){
      return [
        ...currentValue,
        id,
      ];
    }
    return currentValue.filter(value => value !== id);
  };
  return (
    <div className={styles.checkboxes} >
      {values.map(value => (
        <label
          key={value.id}
          className={styles.icon} 
        > 
          <input 
            type="checkbox" 
            value={value.id}
            checked={currentValue.includes(value.id)}
            onChange={event => setOptionValue(
              newValueSet(currentValue, value.id, event.currentTarget.checked))
            }
          />
          {value.name} ({formatPrice(value.price)})
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;