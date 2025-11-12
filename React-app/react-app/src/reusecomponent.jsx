import Data from "./reuse1"

function Reuse(){
    const userData=[
        {name:"Raheel",
        marks:"90",
        email:"raheel@gmail.com",
        id:1
        },
        {name:"Ali",
        marks:"99",
        email:"ali@gmail.com",
        id:2
        },
        {name:"Hamza",
        marks:"95",
        email:"hamza@gmail.com",
        id:3}
    ]
    return(
        <div >
            <h1> Users Data</h1>
            {userData.map((user,index)=>(
     <div key={index}>         
<Data data={user} />
         </div>     ))}
        </div>
    )
}
export default Reuse