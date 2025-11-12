import { useState } from "react"
const Counter=()=>{
    const [count,setCount]=useState(1)
    const[increasing,setIncreasing]=useState(true)
   const handleCount = () => {
    if (increasing) {
      if (count < 10) {
        setCount(count + 1);
      } else {
        setIncreasing(false); 
        setCount(count - 1);
      }
    } else {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setIncreasing(true); 
        setCount(count + 1);
      }
    }
  };
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleCount}>Update counter</button>
        </div>
    )
}
export default Counter