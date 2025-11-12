// App.jsx
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Pagenotfound from "./Pagenotfound";
import College from "./College";
import Student from "./student";
import Department from "./department";
import Courses from "./courses";
import Users from "./users";
import Userdetail from "./userdetail";

function App() {
  return (
    <>
      <Routes>
        {/* Navbar layout wrapper */}
        <Route element={<Navbar />}>
          {/* Default route (Home page when app starts) */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/lists?" element={<Users/>}/>
          <Route path="/users/:id/:name" element ={<Userdetail/>} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Nested routes for College */}
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="courses" element={<Courses />} />
        </Route>

        {/* Fallback route */}
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;