// LogIn.js
/*import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function LogIn() {
  const navigate = useNavigate();
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //const obj = { name, email, password };
    const obj = {email, password };
    // const url = "https://sriramstudentdatabase.onrender.com/students/login";
    const url = "http://localhost:5500/students/login";
    
    axios.post(url, obj)
      .then((res) => {
        alert(res.data); // or handle successful login in your application
        navigate("/home");
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setError("Invalid email or password");
        } else {
          setError("An error occurred while trying to log in");
        }
      });
  };

  return (
    <div className="form-container">
      <h1>Student Login Page</h1>
      <form onSubmit={handleSubmit}>
        {<label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        /> }
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>}
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LogIn;
*/
// LogIn.js
/*import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with email and password
    const obj = { email, password };

    // URL for the login API endpoint
    const url = "http://localhost:5500/students/login";

    // Send a POST request to the login endpoint
    axios.post(url, obj)
      .then((res) => {
        // Handle successful login
        alert(res.data); // You can customize this based on your application
        if(res.data === "login successfull")
        {
          navigate("/home");// Redirect to the home page upon successful login
        }
      })
      .catch((err) => {
        // Handle login errors
        if (err.response && err.response.status === 401) {
          setError("Invalid email or password");
          setPassword(""); // Clear the password field on incorrect login
        } else {
          setError("An error occurred while trying to log in");
        }
      });
  };

  return (
    <div className="form-container">
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"><b>Email</b></label>
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password"><b>Password</b></label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>}
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LogIn;
*/
import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with email and password
    const obj = { email, password };

    // URL for the login API endpoint
    const url = "https://backendsignup.onrender.com/students/login";

    // Send a POST request to the login endpoint
    axios
      .post(url, obj)
      .then((res) => {
        // Handle successful login
        alert(res.data); // You can customize this based on your application
        if (res.data === "login successfull") {
          navigate("/home"); // Redirect to the home page upon successful login
        }
      })
      .catch((err) => {
        // Handle login errors
        if (err.response && err.response.status === 401) {
          setError("Invalid email or password");
          setPassword(""); // Clear the password field on incorrect login
        } else {
          setError("An error occurred while trying to log in");
        }
      });
  };

  return (
    <div>
      <img src={require("../assets/img/headphones.png")} alt="Example" />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Login </h1>
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
          {error && <div className="error-message">{error}</div>}
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default LogIn;
