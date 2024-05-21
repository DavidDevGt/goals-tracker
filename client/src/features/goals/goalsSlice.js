import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGoals, addGoal, removeGoal } from '../../api/goalsApi';

export const getGoals = createAsyncThunk('goals/getGoals', async () => {
    const goals = await fetchGoals();
    return goals;
});

export const createGoal = createAsyncThunk('goals/addGoal', async ({ goal, description, deadline }) => {
    const newGoal = await addGoal(goal, description, deadline);
    return newGoal;
});

export const deleteGoal = createAsyncThunk('goals/removeGoal', async (id) => {
    await removeGoal(id);
    return id;
});

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGoals.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteGoal.fulfilled, (state, action) => {
                return state.filter(goal => goal.id !== action.payload);
            });
    }
});

export default goalsSlice.reducer;
