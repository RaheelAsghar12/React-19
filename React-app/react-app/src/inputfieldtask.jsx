import { useState } from "react";
function Task(){
    const[name,setval]=useState('');
    const[password,setval1]=useState('');
    const[email,setval2]=useState('');
    return(
        <div>
            <input type="text" onChange={(event)=>setval(event.target.value)} placeholder="enter name" />
            
            <br />
            <input type="password" onChange={(event)=>setval1(event.target.value)} placeholder="enter password" />
            
             <br />
            <input type="text" onChange={(event)=>setval2(event.target.value)} placeholder="enter email" />
            <br /><br />
            <button onClick={()=>setval("")}>Submit</button>
        </div>
    )
}
export default Task