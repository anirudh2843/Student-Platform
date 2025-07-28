import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data == "Success") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

        <p className="switch-signup">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <Link to="/" className="back-home-btn">
          ← Back to Home
        </Link>
      </form>
    </div>
  );
};

export default Login;
