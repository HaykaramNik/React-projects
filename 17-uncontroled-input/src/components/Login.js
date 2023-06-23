function Login() {
  function handlwFormSubmit(event) {
    event.preventDefault();

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    
    alert(JSON.stringify(userData))
    console.log(event.target);
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handlwFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
