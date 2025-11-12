import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./App.css";

function Userlist() {
  const [userdata, setuserdata] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const url = "http://localhost:3000/users";

  useEffect(() => {
    setloading(true);
    getUserdata();
  }, []);

  const getUserdata = async () => {
    let response = await fetch(url);
    response = await response.json();
    setuserdata(response);
    setloading(false);
  };

  const deleteRecord = async (id) => {
    let response = await fetch(url + "/" + id, { method: "DELETE" });
    response = await response.json();
    if (response) {
      getUserdata();
    }
  };

  const editrecord = (id) => {
    navigate("/edit/" + id);
  };

  return (
    <div className="userlist-container">
      <h1 className="title">User List</h1>

      <div className="user-table">
       
        <div className="user-header">
          <span>Name</span>
          <span>Email</span>
          <span>Age</span>
          <span>Action</span>
        </div>

        
        {!loading ? (
          userdata && userdata.length > 0 ? (
            userdata.map((user, index) => (
              <div key={index} className="user-row">
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.age}</span>
                <span>
                  <button
                    className="delete-btn"
                    onClick={() => deleteRecord(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => editrecord(user.id)}
                  >
                    Edit
                  </button>
                </span>
              </div>
            ))
          ) : (
            <p className="no-data">No users found.</p>
          )
        ) : (
          <h2 className="loading">Loading data...</h2>
        )}
      </div>
    </div>
  );
}

export default Userlist;
