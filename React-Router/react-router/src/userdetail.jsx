import { Link, useParams } from "react-router"


function Userdetail(){
    const paramsdata=useParams();
    return(
        <div style={{marginLeft:20}}>
            <h1>User Detail Page</h1>
           <h2>User data is :{paramsdata.id}</h2>
        <h3><Link to="/users">Back</Link></h3>
        </div>
    )
}
export default Userdetail