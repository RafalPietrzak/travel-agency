import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({
  limits, currentValue, setOptionValue,
}) => (
  <div className={styles.number} >
    <input 
      type="number"
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
