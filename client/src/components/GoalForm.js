import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createGoal, getGoals } from '../features/goals/goalsSlice';

const GoalForm = () => {
    const [goal, setGoal] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            dispatch(createGoal({ goal, description, deadline })).unwrap()
                .then(() => {
                    setGoal('');
                    setDescription('');
                    setDeadline('');
                    setErrors({});
                    dispatch(getGoals()); // Vuelve a obtener las metas después de agregar una nueva
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
        if (!goal.trim()) {
            errors.goal = 'El nombre de la meta es requerido';
        }
        if (!description.trim()) {
            errors.description = 'La descripción es requerida';
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
        <Form className="m-3" onSubmit={handleSubmit}>
            {errors.general && <Alert variant="danger">{errors.general}</Alert>}
            <Form.Group className='custom-form-group'>
                <Form.Label className='fw-bold mt-2'>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="goal"
                    placeholder="Nombre de la meta"
                    value={goal}
                    onChange={(e) => handleChange(e, setGoal)}
                    isInvalid={!!errors.goal}
                />
                <Form.Control.Feedback type="invalid">{errors.goal}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='custom-form-group'>
                <Form.Label className='fw-bold mt-2'>Descripción</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => handleChange(e, setDescription)}
                    isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='custom-form-group'>
                <Form.Label className='fw-bold mt-2'>Fecha Límite</Form.Label>
                <Form.Control
                    type="date"
                    name="deadline"
                    value={deadline}
                    onChange={(e) => handleChange(e, setDeadline)}
                    isInvalid={!!errors.deadline}
                />
                <Form.Control.Feedback type="invalid">{errors.deadline}</Form.Control.Feedback>
            </Form.Group>
            <div className='text-center'>
                <Button className='mt-3 btn-violet-primary text-black' size="lg" type="submit">
                    Añadir Meta
                </Button>
            </div>
        </Form>
    );
};

export default GoalForm;
