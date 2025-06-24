import { useState, useEffect } from 'react';
import { getMovies, login } from './api';
import Register from './Register';
<<<<<<< HEAD
import './App.css';
=======
import './App.css'; // styles below
>>>>>>> b512796efddb6d39a8c47f733d7026fc38194ca0

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
<<<<<<< HEAD
      <div className="xyz-container">
        <div className="xyz-card">
          <img
            src="https://via.placeholder.com/150x50?text=XYZ+Company"
            alt="XYZ Company Logo"
            className="xyz-logo"
          />
          <h2>XYZ Employee Login</h2>
          <form onSubmit={handleLogin}>
            <input
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
            Register New Employee
          </button>
        </div>
=======
      <div className="container">
        <h2>🎬 Movie Login</h2>
        <form className="card" onSubmit={handleLogin}>
          <input
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
>>>>>>> b512796efddb6d39a8c47f733d7026fc38194ca0
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="xyz-container">
      <div className="xyz-header">
        <img
          src="https://th.bing.com/th/id/OIP.elwnXzNbzh03gTPjQwCCWwHaHa?w=168&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
          alt="XYZ Company Logo"
          className="xyz-logo"
        />
        <button className="logout" onClick={logout}>Logout</button>
      </div>
      <h2>Welcome to XYZ Movie Portal</h2>
=======
    <div className="container">
      <div className="top-bar">
        <h2>🎥 Your Movie List</h2>
        <button className="logout" onClick={logout}>Logout</button>
      </div>
>>>>>>> b512796efddb6d39a8c47f733d7026fc38194ca0
      <div className="movie-list">
        {movies.length === 0 && <p>No movies found.</p>}
        {movies.map((m, i) => (
          <div className="movie-card" key={i}>
            <img src={m.Poster} alt={m.Title} />
            <p><strong>{m.Title}</strong><br />({m.Year})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
