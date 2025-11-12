import useToggle from "./useToggle"

function CustomHook(){
    const[value,togglevalue]=useToggle(true);
    return(
        <div>
            <button onClick={togglevalue}>Toggle</button>
            <button onClick={()=>togglevalue(false)}>Hide</button>
            <button onClick={()=>togglevalue(true)}>Show</button>
           { value?<h1>Custom Hook in React js</h1>:null
}</div>
    )
}
export default CustomHook