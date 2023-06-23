function Post(props) {
  const { title, body } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
}

export default Post;
