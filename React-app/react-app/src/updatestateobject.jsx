import { useState } from "react"

function UpdateObject(){
    const[data,setdata]=useState({
        name:"Raheel",
        address:{
            city:"Skp",
            country:"Pakistan"
        }
    })
    const setName=(event)=>{
     data.name=event;
     setdata({...data});
    }
    const setCity=(event)=>{
    
     setdata({...data,address:{...data.address,city:event}});
    }
    const setCountry=(event)=>{
          setdata({...data,address:{...data.address,country:event}});

    }
    return(
        <div>
            <h1>Update State Object</h1>
            <br /><br />
            <input type="text" placeholder="Update Name" onChange={(event)=>setName(event.target.value)}/>
            <input type="text" placeholder="Update City" onChange={(event)=>setCity(event.target.value)}/>
            <input type="text" placeholder="Update Country" onChange={(event)=>setCountry(event.target.value)}/>
        <h1>Name :{data.name}</h1>
        <h1>City :{data.address.city}</h1>
         <h1>City :{data.address.country}</h1>
        </div>
    )
}
export default UpdateObject