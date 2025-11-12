import { useState } from "react";
function Toggle(){
const [display,setDisplay]=useState(true) 
return(
    <div>
       { display?<h1>Showing</h1>:<h1>Hiding</h1>}
        <button onClick={()=>setDisplay(!display)}>Toggle</button>

        
    </div>
)
}
export default Toggle