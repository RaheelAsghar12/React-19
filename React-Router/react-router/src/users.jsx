import { Link } from "react-router"

function Users(){
    const data=[
        {
            id:1,
            name:'Raheel'
        },
         {
            id:2,
            name:'Ali'
        },
         {
            id:3,
            name:'Farhan'
        },
         {
            id:4,
            name:'Qaxafi'
        },
         {
            id:5,
            name:'Abdullah'
        }
    ]
    return(
        <div style={{marginLeft:20}}>
            <h1>User List Page</h1>
            {
                data.map(item=>(
                    <h1><Link to={"/users/"+item.id}>{item.name}</Link></h1>
                ))
            }

            <h1>User List Page with name in url</h1>
            {
                data.map(item=>(
                    <h1><Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link></h1>
                ))
            }
        </div>
    )
}
export default Users