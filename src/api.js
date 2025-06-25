import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Dynamic based on environment
});

// Login
export const login = async (username, password) => {
  const res = await API.post('/auth/login', { username, password });
  localStorage.setItem('token', res.data.token);
};

// Register
export const register = async (username, password) => {
  const res = await API.post('/auth/register', { username, password });
  return res.data;
};

// Get movies (protected route)
export const getMovies = async () => {
  const token = localStorage.getItem('token');
  const res = await API.get('/movies', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
