import { useState, useEffect } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const responce = await fetch(API_URL);
        const json = await responce.json();
        setPosts(json);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })
      )}
    </>
  );
}

export default Posts;
