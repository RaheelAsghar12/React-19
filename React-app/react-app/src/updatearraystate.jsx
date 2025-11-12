import { useState } from "react"

function UpdateArray(){
    const[data,setdata]=useState(['Raheel','Ali','Abdullah']);
    const[detail,setdetail]=useState([
        {name:'Raheel',
    city:"Skp"
        },
    {name:'Ali',
    city:"pakpattan"
        },
        {name:'Abdullah',
    city:"Gujranwala"
        }  
    ])
    const nameHandler=(event)=>{
       data[data.length-1]=event;
       setdata([...data]);
    }
    const userDetailHandler=(event)=>{
detail[detail.length-1].city=event;
setdetail([...detail])
    }
    return(
        <div>
            <h1>Update Array in State</h1>
            <br /><br />
            <input type="text" placeholder="updatelast" onChange={(event)=>nameHandler(event.target.value)} />
                        <input type="text" placeholder="updatecity" onChange={(event)=>userDetailHandler(event.target.value)} />

{data.map((item,index)=>(
<h1 key={index}>{item}</h1>
))}
{detail.map((val,index)=>
<h4 key={index}>Name is {val.name} & City is {val.city}</h4>
)}

        </div>
    )
}
export default UpdateArray