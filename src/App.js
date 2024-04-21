import React, { useState } from 'react';
import MyNavbar from './components/Navbar';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    const newGoal = { ...goal, id: Math.random() };
    setGoals([...goals, newGoal]);
  };

  const markGoalAsDone = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="App">
      <MyNavbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="sticky-top" style={{ top: 80 }}>
              <GoalForm onAddGoal={addGoal} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="goal-list-container">
              <GoalList goals={goals} onDone={markGoalAsDone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
