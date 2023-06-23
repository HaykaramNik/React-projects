import { useState } from 'react';

function Login() {
  const [userData, setUserData] = useState({ username: '', password: '' });

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleInputName(e, name) {
    setUserData({ ...userData, [name]: e.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={userData.username}
            onChange={handleInputName}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={userData.password}
            onChange={handleInputName}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
