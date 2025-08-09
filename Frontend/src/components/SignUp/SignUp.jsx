import { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // ✅ Password Validation Function
  const getPasswordError = (password) => {
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(password)) return "Password must include an uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must include a lowercase letter.";
    if (!/\d/.test(password)) return "Password must include a number.";
    if (!/[\W_]/.test(password)) return "Password must include a special character.";
    return "";
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordError = getPasswordError(password);
    if (passwordError) return toast.error(passwordError);

    try {
      await axios.post("http://localhost:3000/signup", { name, email, password });
      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data || "Signup failed. Try again.");
    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">
          <strong>Password</strong>
        </label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-password"
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* ✅ Show password error dynamically */}
        {password && getPasswordError(password) && (
          <p className="error-text">{getPasswordError(password)}</p>
        )}

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
