import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
// import styles from './OrderForm.scss';
import {Col, Row} from 'react-flexbox-grid';

const OrderForm = (props) => (
  <Row>
    <Col xs={12}>
      <OrderSummary {...props}/>
    </Col>
  </Row>
);

export default OrderForm;
