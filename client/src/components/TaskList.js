import React, { useEffect } from 'react';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, deleteTask } from '../features/tasks/tasksSlice';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const onRemove = id => {
        dispatch(deleteTask(id));
    };

    return (
        <div>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task.task}
                    deadline={task.deadline}
                    onRemove={() => onRemove(task.id)}
                />
            ))}
        </div>
    );
};

export default TaskList;
