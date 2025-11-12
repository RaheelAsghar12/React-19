import { useState } from "react";
import './App.css'
function Form(){
      const[name,setname]=useState("");
      const[nameErr,setNameErr]=useState();
      const[password,setpassword]=useState("")
      const[passwordErr,setpasswordErr]=useState("")
    const handlename=(event)=>{
    if(event.target.value.length>5){
      setNameErr("Please Enter a Valid Name")
    }
    else{
      setNameErr("")
    }
    }
    const handlepassword=(event)=>{
    let regex=/^[A-Z0-9]+$/i;
    if (regex.test(event.target.value)){
      setpasswordErr("")
    }
    else{
      setpasswordErr("Enter Valid password")
    }
    }
      return (
        <>
        <h1>Form Validation</h1>
          <form action="">
            <input className={nameErr?'error':''} type="text" placeholder="Enter Name" onChange={handlename}/>
            <span>{nameErr && nameErr}</span>
            <br /><br />
            <input className={passwordErr?'error':''} type="text" placeholder="Enterpassword" onChange={handlepassword}/>
                    <span>{passwordErr && passwordErr}</span>
    
            <br /><br />
            <button disabled={nameErr || passwordErr}>Submit</button>
          </form>
           
        </>
      )
}
export default Form