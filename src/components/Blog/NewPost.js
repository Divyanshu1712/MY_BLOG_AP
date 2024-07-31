import React, { useState } from 'react';
import { createPost } from '../../services/api';
import '../../styles/main.css';

const NewPost = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ user_id: userId, title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="blog-form">
      <h2>Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            className="form-control"
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea 
            className="form-control"
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  );
};

export default NewPost;
