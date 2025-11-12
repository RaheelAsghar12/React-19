import { useState } from "react";
import "./App.css";

function AddUser() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  const adduser = async () => {
    const url = "http://localhost:3000/users";

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age }),
    });

    await response.json();

     setname("");
    setemail("");
    setage("");
    alert("User added successfully!");
  };

  return (
    <div className="adduser-container">
      <h1 className="title">Add New User</h1>

      <div className="adduser-form">
        <input
          type="text"
          value={name}
          onChange={(event) => setname(event.target.value)}
          placeholder="Enter Name"
          className="form-input"
        />
        <input
          type="text"
          value={email}
          onChange={(event) => setemail(event.target.value)}
          placeholder="Enter Email"
          className="form-input"
        />
        <input
          type="number"
          value={age}
          onChange={(event) => setage(event.target.value)}
          placeholder="Enter Age"
          className="form-input"
        />
        <button onClick={adduser} className="submit-btn">
          Add User
        </button>
      </div>
    </div>
  );
}

export default AddUser;
