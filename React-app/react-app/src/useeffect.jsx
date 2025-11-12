import { useEffect, useState } from "react"

function Useffect(){
    const [counter,setcounter]=useState(0)
    function callOnces(){
        console.log("Helo");
    }
   useEffect(()=>{
   callOnces()
   },[counter]);
   
    return(
        <div>
            <h1>Use Effect Hook</h1>
            <br /><br />
            <button onClick={()=>setcounter(counter+1)}>counter {counter}</button>
        </div>
    )
}
export default Useffect