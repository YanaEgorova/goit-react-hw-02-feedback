import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => (
                <button
                    className="FeedbackOptions-button"
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </>
    );
};

export default FeedbackOptions;
