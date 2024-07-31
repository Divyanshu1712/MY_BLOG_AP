import React from 'react';
import '../../styles/main.css';

const Post = ({ post }) => {
  return (
    <li className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </li>
  );
};

export default Post;
