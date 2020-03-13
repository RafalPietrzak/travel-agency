import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = (props) => {
  const {tripCost, options} = props;
  return (
    <h2 className={styles.component}>
      Total: <strong>{calculateTotal(
        formatPrice(tripCost),
        options
      )}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,      
};

export default OrderSummary;