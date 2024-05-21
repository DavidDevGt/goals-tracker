const db = require('../config/db');

const addTask = async (task, deadline) => {
    const [rows] = await db.execute('INSERT INTO tasks (task, deadline) VALUES (?, ?)', [task, deadline]);
    return rows;
};

const removeTask = async (id) => {
    const [rows] = await db.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return rows;
};

const getTasks = async () => {
    const [rows] = await db.execute('SELECT * FROM tasks');
    return rows;
};

module.exports = {
    addTask,
    removeTask,
    getTasks
};