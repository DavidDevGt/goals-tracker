import React from 'react';
import Goal from './Goal';

const GoalList = ({ goals, onDone }) => (
    <div>
        {goals.map(goal => <Goal key={goal.id} {...goal} onDone={() => onDone(goal.id)} />)}
    </div>
);

export default GoalList;
