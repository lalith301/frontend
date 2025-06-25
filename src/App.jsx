import { useState, useEffect } from 'react';
import { getMovies, login } from './api';
import Register from './Register';
import MovieCard from './/MovieCard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [authError, setAuthError] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });

  const fetchMovies = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch {
      setAuthError('Failed to fetch movies');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(form.username, form.password);
      setIsLoggedIn(true);
      setAuthError('');
      fetchMovies();
    } catch {
      setAuthError('Invalid username or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMovies([]);
    setAuthError('');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
      fetchMovies();
    }
  }, []);

  if (showRegister) {
    return <Register onSwitchToLogin={() => setShowRegister(false)} />;
  }

  if (!isLoggedIn) {
    return (
      <div className="auth-card">
        <h2 className="app-title">🎬 CineScope</h2>
        <h3 className="auth-heading">Login to your account</h3>
        <form onSubmit={handleLogin} className="auth-form">
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
          {authError && <p className="error">{authError}</p>}
        </form>
        <button className="switch" onClick={() => setShowRegister(true)}>
          Create New Account
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="top-bar">
        <h2>🎥 Welcome to CineScope</h2>
        <button className="logout" onClick={logout}>Logout</button>
      </div>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
