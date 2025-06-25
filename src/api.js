import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api', // Use your backend URL or Render URL if deployed
});

export const login = async (username, password) => {
  const res = await API.post('/auth/login', { username, password });
  localStorage.setItem('token', res.data.token);
};
export const register = async (username, password) => {
  const res = await API.post('/auth/register', { username, password });
  return res.data;
};
export const getMovies = async () => {
  const token = localStorage.getItem('token');
  const res = await API.get('/movies', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
