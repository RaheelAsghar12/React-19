import { useRef } from "react"
import Forwardref1 from "./forwardref1";

function Forwardref(){
    const inputRef=useRef(null);
    const updateinput=()=>{
inputRef.current.value=5000;
inputRef.current.focus();
inputRef.current.style.color="red";
inputRef.current.style.borderRadius="20px"
    }
    return(
        <div>
            <h1>Forward Ref in React</h1>
            <br />
            <Forwardref1 ref={inputRef}/>
            <button onClick={updateinput}>Update</button>
        </div>
    )
}
export default Forwardref