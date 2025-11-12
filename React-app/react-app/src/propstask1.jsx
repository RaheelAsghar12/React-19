import { useEffect, useState } from "react";

function Clock({colour}){
    const [time,settime]=useState();
    useEffect(()=>{
       const interval= setInterval(()=>{
            settime(new Date().toLocaleTimeString());
            return clearInterval(interval);
        },10);
    
    },[])
    return(
        <div>
            <h1 style={{borderRadius:"7px", color:colour, backgroundColor:"black",width:"210px"}}> {time}</h1>
        </div>
    )
}
export default Clock