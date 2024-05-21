const db = require('../config/db');

const addGoal = async (goal, deadline) => {
    const [rows] = await db.execute('INSERT INTO goals (goal, deadline) VALUES (?, ?)', [goal, deadline]);
    return rows;
};

const removeGoal = async (id) => {
    const [rows] = await db.execute('DELETE FROM goals WHERE id = ?', [id]);
    return rows;
};

const getGoals = async () => {
    const [rows] = await db.execute('SELECT * FROM goals');
    return rows;
};

module.exports = {
    addGoal,
    removeGoal,
    getGoals
};