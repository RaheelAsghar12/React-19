import { useState } from "react"
import Adduser from "./Adduser";
import Displayuser from "./DisplayUser";

function LiftingStateUP(){
    const [user,setuser]=useState("");
    return(
        <div>
<h1>Lifting State Up in React</h1>
<br /><br /><br />

<Adduser adduser={setuser}/>
<Displayuser displayuser={user}/>
        </div>
    )
}
export default LiftingStateUP