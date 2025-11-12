import { useState } from "react"
import Counter from "./counter";
function Apps(){
const [name,setname]=useState("Raheel");
const handlename=()=>{
    if(name==="Raheel"){
    setname("ALi Hussnain")}
    else{
        setname("Raheel")
    }
}
    return(
        <div>
            <h1>{name}</h1>
<button onClick={handlename}>Change Name</button>
<Counter/>
        </div>
    )
}
export default Apps