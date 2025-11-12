import { useState } from "react"
function Input(){
    const [val,setvalue]=useState("Raheel Asghar")
    return(
        <div>
<h1>Input Field</h1>
<input type="text" value={val} onChange={(event)=>setvalue(event.target.value)} placeholder="Enter Value" />
       <h1>{val}</h1> 
        <button onClick={()=>setvalue("")}>clear value</button>
        </div>
    )
}
export default Input