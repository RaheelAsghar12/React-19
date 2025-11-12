import { NavLink, Route, Routes, useLocation } from "react-router";
import Userlist from "./userlist";
import AddUser from "./addUser";
import EditUser from "./edituser";

function App() {
  const location = useLocation(); 

  return (
    <div>
      <ul
        style={{
          display: "flex",
          width: "400px",
          justifyContent: "space-around",
          listStyle: "none",
          margin: "20px auto",
          padding: 0,
        }}
      >
        
        {location.pathname === "/" && (
          <li>
            <button style={navButtonStyle}>
              <NavLink to="/add" style={linkStyle}>
                ➕ Add User
              </NavLink>
            </button>
          </li>
        )}

        {(location.pathname === "/add" ||
          location.pathname.startsWith("/edit")) && (
          <li>
            <button style={navButtonStyle}>
              <NavLink to="/" style={linkStyle}>
                🏠 Home
              </NavLink>
            </button>
          </li>
        )}
      </ul>

      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}


const navButtonStyle = {
  backgroundColor: "#007bff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "600",
  fontSize: "16px",
};

export default App;
