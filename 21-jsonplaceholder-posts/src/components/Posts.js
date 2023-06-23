import { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((responce) => responce.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error.massage));
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
}

export default Posts;
