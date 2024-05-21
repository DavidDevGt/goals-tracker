const goalModel = require('../models/goalModel');

const addGoal = async (goal, deadline) => {
    if (!goal || !deadline) {
        throw new Error('Parámetros incorrectos');
    }
    return await goalModel.addGoal(goal, deadline);
};

const removeGoal = async (id) => {
    if (!id) {
        throw new Error('Parámetros incorrectos');
    }
    return await goalModel.removeGoal(id);
};

const getGoals = async () => {
    return await goalModel.getGoals();
};

module.exports = {
    addGoal,
    removeGoal,
    getGoals
};