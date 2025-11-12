import { useTransition } from "react"

function UseTransition(){
    const[pending,startTransition]=useTransition();
const handlebutton=()=>{
    startTransition(async()=>{
await new Promise(res=>setTimeout(res,2000))})
}
    return(
        <div>
            <h1>Use of UseTransition Hook</h1>
            <br /><br />
            {pending? <img width="200px"src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="" />:null }
           <button disabled={pending} onClick={handlebutton}>{pending?'Submitting...':'Submit'}</button>
        </div>
    )
}
export default UseTransition