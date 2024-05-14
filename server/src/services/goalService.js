const goalModel = require('../models/goalModel');

const addGoal = (goal, deadline) => {
    if (!goal || !deadline) {
        throw new Error('Parámetros incorrectos');
    }
    goalModel.addGoal(goal, deadline);
};

const removeGoal = (goal) => {
    if (!goal) {
        throw new Error('Parámetros incorrectos');
    }
    goalModel.removeGoal(goal);
};

const getGoals = () => {
    return goalModel.getGoals();
};

module.exports = {
    addGoal,
    removeGoal,
    getGoals
};