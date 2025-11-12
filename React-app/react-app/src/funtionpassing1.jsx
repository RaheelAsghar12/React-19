function Functionpas({name,getUser}){
    const userName="Ali Hussnain"
    return(
        <div>
            <button onClick={()=>name(userName)}>Submit</button>
            <button onClick={getUser}>Alert</button>
        </div>
    )
}
export default Functionpas