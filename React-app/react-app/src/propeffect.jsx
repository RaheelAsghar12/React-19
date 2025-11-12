import { useState } from "react"
import Useffectprop from "./useeffectwithprops"

function Effectprop(){
    const [count,setcount]=useState(0);
    return(
        <div>
            <Useffectprop count={count}/>
            <button onClick={()=>setcount(count+1)}>Count {count}</button>
        </div>
    )
}
export default Effectprop