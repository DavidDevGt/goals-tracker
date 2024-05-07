import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Task = ({ title, deadline, onRemove }) => (
    <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Fecha límite: {deadline}</Card.Text>
            <Button onClick={onRemove}>Eliminar</Button>
        </Card.Body>
    </Card>
);

export default Task;
