import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasks';

export const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}/getTasks`, {
        headers: {
            'Authorization': 'chanchitoFeliz'
        }
    });
    return response.data;
};

export const addTask = async (task, deadline) => {
    const response = await axios.post(`${API_URL}/addTask`, { task, deadline }, {
        headers: {
            'Authorization': 'chanchitoFeliz'
        }
    });
    return response.data;
};

export const removeTask = async (id) => {
    const response = await axios.delete(`${API_URL}/removeTask/${id}`, {
        headers: {
            'Authorization': 'chanchitoFeliz'
        }
    });
    return response.data;
};