import { useRef } from "react"
function UseRefHook(){
const inputController=useRef(null);
const h1controller=useRef(null)
const inputHandler=()=>{
    inputController.current.focus();
    inputController.current.style.color="red";
    inputController.current.placeholder="enter password";
    inputController.current.value="ABC"
}
const toggleHandler=()=>{
if(inputController.current.style.display!="none"){
    inputController.current.style.display="none"
}
else{
    inputController.current.style.display="inline"
}

}
const H1handler=()=>{
    if(h1controller.current.style.color!="green"){
        h1controller.current.style.color="green";
    }
    else{
        h1controller.current.style.color="red"
    }
}

    return(
        <div>
            <h1>UseRef Hook in React Js</h1>
            <br />
            <button onClick={toggleHandler}>Toggle</button>
            <input ref={inputController} type="text" placeholder="Enter Name"/>
<button onClick={inputHandler}>Focus on Input Field</button>        
        <br /><br /><br />
        <h1 ref={h1controller}>USeRef on Elements</h1>
        <button onClick={H1handler}>UseRef</button>
        </div>
    )
}
export default UseRefHook