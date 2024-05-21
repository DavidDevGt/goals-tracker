import axios from 'axios';

const API_URL = 'http://localhost:3000/api/goals';

export const fetchGoals = async () => {
    const response = await axios.get(`${API_URL}/getGoals`, {
        headers: {
            'Authorization': 'chanchitoFeliz'
        }
    });
    return response.data;
};

export const addGoal = async (goal, description, deadline) => {
    const response = await axios.post(`${API_URL}/addGoal`, { goal, description, deadline }, {
        headers: {
            'Authorization': 'chanchitoFeliz'
        }
    });
    return response.data;
};

export const removeGoal = async (id) => {
    const response = await axios.delete(`${API_URL}/removeGoal/${id}`, {
        headers: {
            'Authorization': 'chanchitoFeliz'
        }
    });
    return response.data;
};