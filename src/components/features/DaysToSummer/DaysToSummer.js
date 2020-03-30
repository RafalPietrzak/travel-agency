import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

const DaysToSummer = (props) => {
  const { description, days } = props;
  const dayToSummer = () => {
    const currentDate = new Date();
    const startSummer = new Date(`${currentDate.getUTCFullYear()}-06-21T00:00:00.000Z`);
    const endSummer = new Date(`${currentDate.getUTCFullYear()}-09-23T23:59:59.999Z`);
    if (
      currentDate.valueOf() >= startSummer.valueOf()
      &&
      currentDate.valueOf() <= endSummer.valueOf()
    ) {
      return 0;
    } else if (currentDate.valueOf() <= startSummer.valueOf()) {
      return Math.ceil((startSummer.valueOf() - currentDate.valueOf()) / (24 * 60 * 60 * 1000));
    } else if (currentDate.valueOf() >= startSummer.valueOf()) {
      const nextSummer = new Date(`${currentDate.getUTCFullYear() + 1}-06-21T00:00:00.000Z`);
      return Math.ceil((nextSummer.valueOf() - currentDate.valueOf()) / (24 * 60 * 60 * 1000));
    }
  };
  const daysLeft = dayToSummer();
  return (
    daysLeft === 0 ? null :
      <div className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.number}>{daysLeft}</span>
          <span className={styles.days}> 
            {daysLeft === 1 ? ' ' + days.one : ' ' + days.many}
          </span>
          <span className={styles.description}> {description}</span>
        </h3>
      </div>
  );
};

DaysToSummer.propTypes = {
  description: PropTypes.string,
  days: PropTypes.object,
};

export default DaysToSummer;