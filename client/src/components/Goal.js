import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './../styles/Goal.css';

const Goal = ({ goal, description, deadline, onDone }) => (
    <Card className="goal-card text-center">
        <Card.Body>
            <Card.Title>
                <b>Nombre:</b><br /> {goal}
            </Card.Title>
            <Card.Text>
                <b>Descripción:</b><br /> {description}
            </Card.Text>
            <Card.Text>
                <b>Fecha límite:</b> {deadline}
            </Card.Text>
            <Button variant="outline-primary" className='w-100 text-black btn-violet-primary' onClick={onDone}>Remover</Button>
        </Card.Body>
    </Card>
);

export default Goal;
