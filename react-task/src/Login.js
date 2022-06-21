import { useState } from "react";

const Login = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <h1>Login</h1>
      <form>
        <label htmlFor="username-input">Username:</label>
        <input
          type="text"
          id="username-input"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password-input">Password:</label>
        <input
          type="password"
          id="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          id="login-button"
          disabled={!username || !password ? true : false}
          type="submit"
          onClick={(e) => handleSubmit(username, password, e)}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
