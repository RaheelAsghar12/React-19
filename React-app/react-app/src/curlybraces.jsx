function Opertion(){
    const userobj={
        name:"Raheel",
        email:"raheel@gmail.com",
        Father:"Asghar"
    }
    const myarray=['sam','peter']
function opertion(a,b,op){
if(op=="+"){
    return a+b;
}
else if(op=="-"){
    return a-b;
}
else {
    return (
        <div><h1>Nothing is done</h1>
        
        
        </div>
    )
}

}
return(
    <div>
        {opertion(10,20,"+")}
        <h1>{name?name:"User Not found"} </h1>
        {userobj.email}
        <br />
        <input type="text" value={userobj.name} id={userobj.name} />
    </div>
)
}
export default Opertion
