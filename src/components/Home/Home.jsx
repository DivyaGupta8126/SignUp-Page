import React from "react";
import { useState } from "react";
import "./Home.css";
import courier from "../../Assets/courier.png";

const home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firmName, setFirmName] = useState("");

  const formsubmit = (e) => {
    e.preventDefault();
    if (name && email && password && firmName) {
      alert("Account created successfully");
      setName("");
      setEmail("");
      setPassword("");
      setFirmName("");
    } else alert("Enter all the details");
  };

  return (
    <div className="home">
      <div className="home-left">
        <h1>Join Us!</h1>
        <p>
          Welcome to Merchant Union. Create an account to join hands with us.
        </p>
        <img className="courier" src={courier} alt="" />
      </div>

      <div className="home-right">
        <form onSubmit={formsubmit}>
          <h1>Hello, Merchant!</h1>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter your name"
          />
          <input
            type="text"
            onChange={(e) => setFirmName(e.target.value)}
            value={firmName}
            placeholder="Enter your Business Name"
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
          <button type="submit">CREATE ACCOUNT</button>
        </form>
      </div>
    </div>
  );
};

export default home;
