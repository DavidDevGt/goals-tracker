import React, { useEffect } from 'react';
import Goal from './Goal';
import { useSelector, useDispatch } from 'react-redux';
import { getGoals, deleteGoal } from '../features/goals/goalsSlice';

const GoalList = () => {
    const goals = useSelector(state => state.goals);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGoals());
    }, [dispatch]);

    const onDone = id => {
        dispatch(deleteGoal(id));
    };

    return (
        <div>
            {goals.map(goal => (
                <Goal
                    key={goal.id}
                    goal={goal.goal}
                    description={goal.description}
                    deadline={goal.deadline}
                    onDone={() => onDone(goal.id)}
                />
            ))}
        </div>
    );
};

export default GoalList;
