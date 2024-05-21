const taskModel = require('../models/taskModel');

const addTask = async (task, deadline) => {
    if (!task || !deadline) {
        throw new Error('Parámetros incorrectos');
    }
    return await taskModel.addTask(task, deadline);
};

const removeTask = async (id) => {
    if (!id) {
        throw new Error('Parámetros incorrectos');
    }
    return await taskModel.removeTask(id);
};

const getTasks = async () => {
    return await taskModel.getTasks();
};

module.exports = {
    addTask,
    removeTask,
    getTasks
};