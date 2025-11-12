import { useState } from "react"

const useToggle=(defaultval)=>{
const [value,setvalue]=useState(defaultval);
function toggleValue(val){
    if(typeof val!='boolean'){
        setvalue(!value)
    }
    else{
        setvalue(val)
    }
}
return[value,toggleValue];
}
export default useToggle