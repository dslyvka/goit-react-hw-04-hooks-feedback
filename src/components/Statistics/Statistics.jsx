import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ListStyled } from './Statistics.styled';

// import Notification from './Notification';
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  // render() {
  // if (this.props.good || this.props.neutral || this.props.bad) {
  return (
    <Fragment>
      <section>
        <h2 style={{ textAlign: 'center' }}>Statistics</h2>
        <ListStyled>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total} reviews</li>
          <li>
            Positive feedback:{' '}
            {isNaN(Math.round(positivePercentage))
              ? 0
              : Math.round(positivePercentage)}
            %
          </li>
        </ListStyled>
      </section>
      {}
    </Fragment>
  );
  // } else {
  //   return <Notification />;
  // }
  // }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
