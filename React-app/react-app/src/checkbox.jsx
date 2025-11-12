import { useState } from "react"

function Checkbox(){
    const [skill,setSkills]=useState([])
    const handleskills=(event)=>{
        if(event.target.checked){
          setSkills([...skill,event.target.value])  
        }
        else{
            setSkills([...skill.filter((item)=>item!=event.target.value)])

        }
    }
    return(
        <div>
           <h3>Select Skills</h3>
            <input type="checkbox" onChange={handleskills} id="cpp" value="cpp"/>
            <label htmlFor="cpp">cpp</label>
            <br /><br />
             <input type="checkbox" onChange={handleskills} id="c" value="c"/>
            <label htmlFor="c">C</label>
            <br /><br />
             <input type="checkbox" onChange={handleskills} id="java" value="java"/>
            <label htmlFor="java">Java</label>
            <h1>{skill.toString()}</h1>       
        </div>
    )
}
export default Checkbox