import { lazy,Suspense,useState } from "react"
const UseReducerHook=lazy(()=>import ("./useReducerHook"));

 

function App() {
  const[load,setload]=useState(false)
return(
  <div><h1>Lazy Loading</h1>
  <button onClick={()=>setload(true)}>Go</button>
  {load?<Suspense fallback={<h3>Loading...</h3>
  }><UseReducerHook/></Suspense>:null} 
  
  </div>
)

}

export default App
