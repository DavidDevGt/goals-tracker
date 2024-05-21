import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks, addTask, removeTask } from '../../api/tasksApi';

export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
    const tasks = await fetchTasks();
    return tasks;
});

export const createTask = createAsyncThunk('tasks/addTask', async (taskData) => {
    const newTask = await addTask(taskData.task, taskData.deadline);
    return newTask;
});

export const deleteTask = createAsyncThunk('tasks/removeTask', async (id) => {
    await removeTask(id);
    return id;
});

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                return state.filter(task => task.id !== action.payload);
            });
    }
});

export default tasksSlice.reducer;
