import {useFormStatus} from 'react-dom'
function Formstatushook(){
const onSubmit=async ()=>{
await new Promise(res=>setTimeout(res,2000))
}
function Customer(){
    const {pending}=useFormStatus();
    return(
        <div>
             <input type="text " placeholder="Enter Name" />
       <br /><br />
       <input type="password" placeholder="Enter Password" />
       <br /><br />
       <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>

        </div>
    )
}
    return(
        <div>
            <h1>UseFormStatus Hook</h1>
           <br />
           <br />
           <form action={onSubmit}> 
            <Customer/>   
      </form>
               </div>
    )
}
export default Formstatushook