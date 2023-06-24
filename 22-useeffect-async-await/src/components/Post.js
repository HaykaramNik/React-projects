import './Post.css'

function Post(props) {
  const { title, body } = props;
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
