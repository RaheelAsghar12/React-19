import { useState } from "react"

function Radiobutton(){
    const [gender,setgender]=useState("male")
    const[city,setcity]=useState("Skp")
    return(
        <div>
            <h1>Radio Button</h1>
            <h4>Select Gender</h4>
            <input type="radio" onChange={(event)=>setgender(event.target.value)}  name="gender" id="male" value="male" checked={gender=="male"}/>
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setgender(event.target.value)}  name="gender" id="female" value="female" checked={gender=="female"}/>
            <label htmlFor="female">Female</label>
<br /><br /><br /><br />
             <select onChange={(event)=>setcity(event.target.value)} defaultValue={city}>
<option value="Lahore" >Lahore</option>
<option value="Skp">Skp</option>
<option value="Multan">Multan</option>
             </select>
<h2>Selected City is {city}</h2>
        </div>
    )
}
export default Radiobutton