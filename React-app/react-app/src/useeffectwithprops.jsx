import { useEffect } from "react";

function Useffectprop({count}){
    
    const handleCount=()=>{
        console.log("Counter Called")
    }
    useEffect(()=>{
handleCount();
    },[count])
    
return(
    <div>
      <h1>UseEffect using props</h1>  
      <br />
      <h1>Counter value {count}</h1>
       </div>
)
}
export default Useffectprop