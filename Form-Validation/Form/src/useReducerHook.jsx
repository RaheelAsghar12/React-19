import { useReducer } from "react"

const emptyData={
    name:"",
    password:"",
    email:'',
    city:'',
    address:''
}


function UseReducerHook(){
    const reducer=(data,action)=>{
return{...data,[action.type]:action.val}
    }
    const[state,dispatch]=useReducer(reducer,emptyData);
    return(
        <div><h1>Use Of UseReducerHook</h1>
        <input type="text" placeholder="Name" onChange={(event)=>dispatch({val:event.target.value,type:'name'})}/>
<br />       
        <input type="text" placeholder="password" onChange={(event)=>dispatch({val:event.target.value,type:'password'})}/>
      <br />  <input type="text" placeholder="email" onChange={(event)=>dispatch({val:event.target.value,type:'email'})}/>
       <br /> <input type="text" placeholder="city" onChange={(event)=>dispatch({val:event.target.value,type:'city'})}/>
       <br /> <input type="text" placeholder="address" onChange={(event)=>dispatch({val:event.target.value,type:'address'})}/>
        
            <ul>
                <li>Name:{state.name}</li>
<li>Password:{state.password}</li>
<li>Email:{state.email}</li>
<li>City:{state.city}</li>
<li>Address:{state.address}</li>

            </ul>
        
        </div>
    )
}
export default UseReducerHook