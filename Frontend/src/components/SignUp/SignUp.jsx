import  { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signup", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <label htmlFor="name">
          <strong>Name</strong>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          name="email"
          placeholder=" Enter Email "
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>

        <p className="switch-login">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <Link to="/" className="back-home-btn">
          ← Back to Home
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
