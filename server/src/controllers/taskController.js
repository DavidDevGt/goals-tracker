const goalService = require('../services/goalService');

const getGoals = async (req, res) => {
    try {
        const goals = await goalService.getGoals();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addGoal = async (req, res) => {
    try {
        const { goal, deadline } = req.body;
        await goalService.addGoal(goal, deadline);
        res.status(201).json({ message: 'Meta agregada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeGoal = async (req, res) => {
    try {
        const { id } = req.params;
        await goalService.removeGoal(id);
        res.status(200).json({ message: 'Meta eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getGoals,
    addGoal,
    removeGoal
};
