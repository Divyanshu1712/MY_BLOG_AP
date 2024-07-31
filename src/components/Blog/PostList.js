import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/api';
import Post from './Post';
import '../../styles/main.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(response => setPosts(response.data));
  }, []);

  return (
    <div className="post-list">
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
