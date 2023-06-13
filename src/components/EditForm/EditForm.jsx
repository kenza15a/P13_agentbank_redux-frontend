import React from "react";
import { useState } from "react";
import "./editForm.css";
function EditForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    //appele un dispatch
  };

  return (
    <form  className="edit-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditForm;
