import { useState } from "react"

function Derived(){
    const [users,setUsers]=useState([]);
    const[user,setUser]=useState("");

    const handleUsers=()=>{
        if(user.trim()==="") return;
        setUsers([...users,user]);
        setUser("");
    };
     const handleClearAll = () => {
    setUsers([]); // ✅ clears all users
  };
     const total=users.length;
        const last=users[users.length-1];
        const unique=[...new Set(users)].length;
    return(
        <div>
            <h1>Derived States in React Js</h1>
<br /><br />
<h2>Total Users :{total}</h2>
<h2>Last User :{last}</h2>
<h2>Unique Users :{unique}</h2>
<input type="text" value={user} onChange={(event)=>setUser(event.target.value)} placeholder="Add new"/>
       <button onClick={handleUsers} style={{ marginLeft: "10px", color: "white", backgroundColor: "green", borderRadius:"5px" }}>Add User</button>
        <button onClick={handleClearAll} style={{ marginLeft: "10px", color: "white", backgroundColor: "red", borderRadius:"5px" }}>
        Clear All
      </button>
       {users.map((item,index)=>(
        <h4 key={index}>{item}</h4>

       ))}
       
        </div>
    )
}
export default Derived