import { useState } from "react"
import Clock from "./propstask1"

function Colours(){
    const [colour,setcolour]=useState('green')
    return(
        <div>
            <h1>Clock colour changing using Props</h1>
            <select style={{borderColor:"red", borderRadius:"7px"}} onChange={(event)=>setcolour(event.target.value)}>
                <option style={{color:"orangered"}} value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
            </select>
            <Clock colour={colour}/>
        </div>
    )
}
export default Colours