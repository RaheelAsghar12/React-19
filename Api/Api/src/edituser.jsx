import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./App.css";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users/" + id;
    let response = await fetch(url);
    response = await response.json();
    setname(response.name);
    setemail(response.email);
    setage(response.age);
  };

  const updateUserData = async () => {
    const url = "http://localhost:3000/users/" + id;
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age }),
    });

    await response.json();
    alert("User details updated successfully!");
    navigate("/");
  };

  return (
    <div className="edituser-container">
      <h1 className="title">Edit User Details</h1>

      <div className="edituser-form">
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
        <button onClick={updateUserData} className="submit-btn">
          Update Details
        </button>

        <button
          onClick={() => navigate("/")}
          className="back-btn"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default EditUser;
