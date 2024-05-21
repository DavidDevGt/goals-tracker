import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createTask, getTasks } from '../features/tasks/tasksSlice';

const TaskForm = () => {
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            dispatch(createTask({ task, deadline })).unwrap()
                .then(() => {
                    setTask('');
                    setDeadline('');
                    setErrors({});
                    dispatch(getTasks()); // Vuelve a obtener las tareas después de agregar una nueva
                })
                .catch(error => {
                    setErrors({ general: error.message });
                });
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!task.trim()) {
            errors.task = 'El nombre de la tarea es requerido';
        }
        if (!deadline) {
            errors.deadline = 'La fecha límite es requerida';
        }
        return errors;
    };

    const handleChange = (e, setter) => {
        setter(e.target.value);
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {errors.general && <Alert variant="danger">{errors.general}</Alert>}
            <Form.Group>
                <Form.Label>Nombre de la Tarea</Form.Label>
                <Form.Control
                    type="text"
                    name="task"
                    placeholder="Nombre de la tarea"
                    value={task}
                    onChange={(e) => handleChange(e, setTask)}
                    isInvalid={!!errors.task}
                />
                <Form.Control.Feedback type="invalid">{errors.task}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mt-3'>
                <Form.Label>Fecha Límite</Form.Label>
                <Form.Control
                    type="date"
                    name="deadline"
                    value={deadline}
                    onChange={(e) => handleChange(e, setDeadline)}
                    isInvalid={!!errors.deadline}
                />
                <Form.Control.Feedback type="invalid">{errors.deadline}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" className='mt-3' type="submit">
                Agregar Tarea
            </Button>
        </Form>
    );
};

export default TaskForm;
