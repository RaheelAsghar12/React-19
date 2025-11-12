import styled from "styled-components"
function Styledcom(){
    const Heading=styled.h1`
    color:red;
    border:2px solid yellow;
    border-radius:5px;
    margin:10px;
    padding:10px;
    `
    const Heading1=styled.h1({
         color:"red",
    border:"2px solid yellow",
    borderRadius:"5px",
    margin:"10px",
    padding:"10px"
    })
    const Button=styled.button`
    color:blue;
    width:100px;
    background-color:grey
    
    `
    return(
        <div>
            <h1>Styled Component in React Js</h1>
            <Heading>Hello CSS</Heading>
            <Heading1>Hello component css</Heading1>
            <Button>Styled</Button>
        </div>
    )
}
export default Styledcom