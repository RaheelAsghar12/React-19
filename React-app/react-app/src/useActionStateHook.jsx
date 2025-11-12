import { useActionState } from "react"

function UseActionState(){
        const handleSubmit= async (previousData,newData)=>{
   let name=newData.get('name');
   let password=newData.get('password')
   await new Promise(res=>setTimeout(res,2000))
   if(name && password){
    return{message:'Data Submitted',name,password}
   }
   else{
    return{error:'Submission Failed',name,password}
   }
    }
    const[data,action,pending]=useActionState(handleSubmit,undefined);

    return(
        <div>
            <h1>Use of UseActionStateHook</h1>
<br /><br />
<form action={action}>
    <input type="text" placeholder="entername" name="name" />
    <br /><br />
    <input type="password" placeholder="enterpassword" name="password" />
    <br />
     <button disabled={pending}>Submit</button>
</form>
{data?.message && <span style={{color:'green'}}>{data?.message}</span>}
{data?.error && <span style={{color:'red'}}>{data?.error}</span>}    
  <h1>Name is {data?.name}</h1>
  <h1>Password is {data?.password}</h1>


    </div>
   

)
}
export default UseActionState