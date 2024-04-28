// src/App.js
import React from 'react';
import MyNavbar from './components/Navbar';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const goals = useSelector(state => state.goals);

  return (
    <div className="App">
      <MyNavbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="sticky-top" style={{ top: 80 }}>
              <GoalForm />
            </div>
          </div>
          <div className="col-md-6">
            <div className="goal-list-container">
              <GoalList goals={goals} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
