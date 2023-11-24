/*import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Basic form validation
      if (!name.trim()) {
        setError("Name cannot be empty");
        return;
      }

      if (!email.trim()) {
        setError("Email cannot be empty");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Enter a valid email address");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      const obj = { name, email, password };
      console.log(obj);

      const url = "http://localhost:5500/students/create-student";
      const res = await axios.post(url, obj);

      if (res.status === 200) {
        alert("Student added successfully");
        // Reset form after successful submission
        setName("");
        setEmail("");
        setPassword("");
        setError("");
      } else {
        throw new Error("Failed to add student");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while submitting the form");
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="error-message">{error}</div>
        <input id="submit" type="submit" value="Submit" />
      </form>
      <h2>Have an account?</h2>
      <h4>
        <Link to="/login">Login Page</Link>
      </h4>
      <h4>
        <Link to="/view">View Page</Link>
      </h4>
    </div>
  );
}

export default SignUp;*/
import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Basic form validation
      if (!name.trim()) {
        setError("Name cannot be empty");
        return;
      }

      if (!email.trim()) {
        setError("Email cannot be empty");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Enter a valid email address");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const obj = { name, email, password };
      console.log(obj);

      const url = "https://backendsignup.onrender.com/students/create-student";
      const res = await axios.post(url, obj);

      if (res.status === 200) {
        alert("Added Successfully");
        navigate("/Login");
        // Reset form after successful submission
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError("");
      } else {
        throw new Error("Failed to add");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while submitting the form");
    }
  };

  return (
    <div>
      <img src={require("../assets/img/headphones.png")} alt="Example" />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="error-message">{error}</div>
          <input id="submit" type="submit" value="Submit" />
          <h2>Have an account?</h2>
          <h4>
            <Link to="/login">Login Page</Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
