import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
const OPTIONS = ['good', 'neutral', 'bad'];

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleLeaveFeedback = option => {
        this.setState(prevState => {
            return {
                [option]: prevState[option] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    };
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        const countPositive = Math.round((good * 100) / total);
        return countPositive;
    };

    render() {
        const countTotal = this.countTotalFeedback();
        const countPositive = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={OPTIONS}
                        onLeaveFeedback={this.handleLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {countTotal > 0 && (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={countTotal}
                            positivePercentage={countPositive}
                        />
                    )}
                    {countTotal <= 0 && (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </>
        );
    }
}
