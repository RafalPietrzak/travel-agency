import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionNumber from './OrderOptionNumber';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
  type: PropTypes.string,
};

export default OrderOption;