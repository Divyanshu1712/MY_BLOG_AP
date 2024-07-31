import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import PostList from './components/Blog/PostList';
import NewPost from './components/Blog/NewPost';
import Layout from './components/Layout';
import './styles/main.css';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={token ? (
            <>
              <NewPost userId={1} /> {/* Assuming user_id is 1 for now */}
              <PostList />
            </>
          ) : (
            <p>Please login to see the posts.</p>
          )} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
