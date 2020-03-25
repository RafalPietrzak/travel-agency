import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({
  values, currentValue, setOptionValue,
}) => (
  <div className={''} >
    {values.map(value => (
      <div 
        className={[
          styles.icon, 
          value.id === currentValue ? styles.iconActive : '',
        ].join(' ')} 
        key={value.id}
        onClick={()=>setOptionValue(value.id)}
      > 
        <Icon name={value.icon}/>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;