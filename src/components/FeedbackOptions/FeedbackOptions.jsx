import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackOptions}>
        <h3 className={styles.heading}>Please leave feedback</h3>
      <div className={styles.buttonContainer}>
        {options.map(option => (
          <button
            className={styles.button}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
