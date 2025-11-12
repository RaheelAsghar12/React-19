import Oper from "./arrowfun"
import Header from "./Header"
import Assignment from "./assignment"
import Student from "./student"
import { useState } from "react"
import Wrapper from "./wrapper"
function Apple(){
return(
  <div>
    <Oper/>
    <Assignment></Assignment>
    <Header/>
    <h1>Hello Raheel</h1>
    <h1>React Tutorial</h1>
  </div>
 
)
}
function Fruit(){
  return(
    <div>
      <h1>Apple</h1>
      <Apple/>
    </div>
  )
}
function Colour(){
  const[student,setStudent]=useState()
  return(
    <div> 
      <Wrapper color="orange">
        <h1 style={{color:"red"}}>Hello</h1>
      </Wrapper>
      <Wrapper color="orange">
        <h1>Hello Bro</h1>
      </Wrapper>
     {student && <Student name={student}/>}
    <button onClick={()=>setStudent("Ali")}>update student</button>
    
    </div>
  )
}
export function Dollar(){
  return (
    <div>
      <h1>Dollar</h1></div>
  )
}
function count(a,b){
  return a*b;
}
export function Rupee(){
  return(
    <div><h1>Rupees {count(10,20)}</h1></div>
  )
}
export function Button(){
  function handleClicks(){
    alert("You clicked me")
  }
  return(
    <button onClick={handleClicks}>Click me</button>
  )
}
export const key="122345"
export default Colour