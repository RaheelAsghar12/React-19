import {NavLink, Outlet} from "react-router"
import './App.css'
function Navbar(){
    return(
       <div>
         <div className="header">

    <NavLink className="NavLink" to="/"><h2>Logo</h2></NavLink>

<div>
<ul>
    <li>
        <NavLink className="Home" to="/home">Home</NavLink>
    </li>
    <li>
        <NavLink className="About" to="/about">About</NavLink>
    </li>
    <li>
        <NavLink className="College" to ="/college">College</NavLink>
    </li>
    <li>
        <NavLink className="Users" to ="/users">Users</NavLink>
    </li>
    <li>
        <NavLink className="List" to ="/users/lists">List</NavLink>
    </li>
</ul>
</div>
        </div>
        <Outlet/>
       </div>
       
    )
}
export default Navbar