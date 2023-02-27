import classes from './Counter.module.scss';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

export function Counter({ count: initalCount, min, max, step, buttonLabels }) {
  const [counter, setCounter] = useState(initalCount);

  return (
    <div>
      <button type="button" aria-label={buttonLabels.increment}>
        +
      </button>
      <output>{counter}</output>
      <button type="button" aria-label={buttonLabels.decrement}>
        -
      </button>
    </div>
  );
}

//Props

Counter.defaultProps = {
  count: 1,
  min: 1,
  max: 10,
  step: 1,
  buttonLabels: {
    increment: '카운트 증가',
    decrement: '카운트 감소',
  },
};

Counter.propTypes = {
  count: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  buttonLabels: PropTypes.shape({
    increment: PropTypes.string,
    decrement: PropTypes.string,
  }),
};
