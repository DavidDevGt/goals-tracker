const taskService = require('../services/taskService');

const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addTask = async (req, res) => {
    try {
        const { task, deadline } = req.body;
        await taskService.addTask(task, deadline);
        res.status(201).json({ message: 'Tarea agregada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeTask = async (req, res) => {
    try {
        const { id } = req.params;
        await taskService.removeTask(id);
        res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTasks,
    addTask,
    removeTask
};
