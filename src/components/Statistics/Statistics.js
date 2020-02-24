import React from 'react';
import './Statistics.css';

function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) {
    return ( <>
        <p className = "Statistics-text" > Good: {good} </p> 
        <p className = "Statistics-text" > Neutral: {neutral} </p> 
        <p className = "Statistics-text" > Bad: {bad} </p> 
        <p className = "Statistics-text" > Total: {total} </p> 
        <p className = "Statistics-text" > Positive feedback: {positivePercentage} </p> 
            </>
    );
}

export default Statistics;
