import Functionpas from "./funtionpassing1"

function Function(){
    const displayName=(name)=>{
        alert(name)
    }
    const getUser=()=>{
        alert("Raheel")
    }
    return(
        <div>
            <h1>Passing function from parent to child component</h1>
        <Functionpas name={displayName}/>
        <Functionpas name={displayName} getUser={getUser}/>
        
        </div>
    )
}
export default Function