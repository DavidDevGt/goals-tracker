import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Task = ({ task, deadline, onRemove }) => (
    <Card className='m-2'>
        <Card.Body>
            <Card.Title>{task}</Card.Title>
            <Card.Text>Fecha límite: {deadline}</Card.Text>
            <Button variant="outline-danger" onClick={onRemove}>Eliminar</Button>
        </Card.Body>
    </Card>
);

export default Task;
