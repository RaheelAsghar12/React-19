import { NavLink, Outlet } from "react-router"
import './App.css'
function College(){
    return(
        <div className="college" style={{textAlign:"center", margin:"10px"}}>
<NavLink style={{textDecoration:"none", margin:"10px"}}className="students" to="student" >Student</NavLink>
<NavLink className="department" to="department" >Department</NavLink>
<NavLink className="courses" to="courses" >Courses</NavLink>
<Outlet/>
        </div>
    )
}
export default College