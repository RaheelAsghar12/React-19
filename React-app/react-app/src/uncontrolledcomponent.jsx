function Uncontrolledcomponent(){
    const Submithandler=(event)=>{
event.preventDefault();
const user=document.querySelector("#text").value;
const password=document.querySelector("#password").value;
document.getElementById("result").innerHTML=`
<h3>User Name: ${user}</h3>
<h3>Password :${password}</h3> 
    `

};
    return(
        <div>
            <h1>Uncontrolled Components In React Js </h1>
<form action="" method="post" onSubmit={Submithandler} >
<input type="text" id="text" placeholder="Enter Name"/>
<input type="password" id="password" placeholder="Enter Password"/>
<button >Submit</button>

</form>

<div id="result"></div>

        </div>
    )
}
export default Uncontrolledcomponent