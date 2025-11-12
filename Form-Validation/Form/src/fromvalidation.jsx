
 

import { useActionState } from "react"

function Apps() {


const handleLogin=(previous,formData)=>{
let name=formData.get('name');
let password=formData.get('password')
const regex=/^[A-Z0-9]+$/i;
if(!name || name.length>5){
  return{error:"Name should be less than 5 characters and cant be empty"}
}
else if(!regex.test(password)){
  return{error:"Password should not contain special characters"}
}
else{
  return{message:"Successfully Login"}
}
}
const[data,action,pending]=useActionState(handleLogin)
return(
  <div>
    <h1>Validation with useActionState in React</h1>
  {
    data?.message && <span>{data?.message}</span>
  }
  {
    data?.error && <span>{data?.error}</span>
  }
  <form action={action}>
    
    <input type="text" name="name" placeholder='Enter Name'/>
<br /><br />   
    <input type="text" name='password' placeholder='Enter Password'/>
   <br /><br />
    <button >Login</button>
  </form>
  
  
  </div>

)
}

export default Apps
