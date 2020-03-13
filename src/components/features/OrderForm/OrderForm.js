import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
// import styles from './OrderForm.scss';
import {Col, Row} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import PropTypes from 'prop-types';

const OrderForm = (props) => {
  const {options, setOrderOption} = props;
  return (
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption 
            currentValue={options[option.id]} 
            {...option} 
            setOrderOption={setOrderOption}
          />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary {...props} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
