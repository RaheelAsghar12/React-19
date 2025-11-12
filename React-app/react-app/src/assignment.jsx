import Opertion from "./curlybraces"
function Assignment(){
    let path="/vite.svg"
    return(
        <div>
            <h1>Raheel Asghar</h1>
            <img  src={path} alt="React photo" class="Photo"/>
            <ul>
                <li>Invent</li>
                <li>Rehearse</li>
                <li>Improve</li>
            </ul>
            <button onClick={clickEvent}>Clickme</button>
<Opertion/>
        </div>
    )
}
function clickEvent(){
    alert("Button is Clicked")
}
export default Assignment