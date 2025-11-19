import React, { useState } from "react";
import "./registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    userPassword: "",
    userAge: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted!");
    console.log(formData);
  };

  return (
    <div className="reg-wrapper">
      <h2 className="reg-title">Register Here!!</h2>

      <form onSubmit={handleSubmit} className="reg-form">

        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="emailAddress"
          placeholder="Enter Email"
          value={formData.emailAddress}
          onChange={handleChange}
        />

        <input
          type="number"
          name="userAge"
          placeholder="Enter Age"
          value={formData.userAge}
          onChange={handleChange}
        />

        <input
          type="password"
          name="userPassword"
          placeholder="Enter Password"
          value={formData.userPassword}
          onChange={handleChange}
        />

        <button type="submit" className="reg-btn">Register</button>
      </form>

      <div className="reg-output">
        <h3>Live Preview</h3>
        <p><b>Name:</b> {formData.fullName}</p>
        <p><b>Email:</b> {formData.emailAddress}</p>
        <p><b>Age:</b> {formData.userAge}</p>
        <p><b>Password:</b> {formData.userPassword}</p>
      </div>
    </div>
  );
}
