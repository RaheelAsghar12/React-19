import { useState } from "react"

function Inlines(){
    const[grid,setgrid]=useState(true);
    const  [cardstyle,setcardstyle] =useState(
      {   border: "1px solid blue",
        width:"200px",
        boxShadow:"1px 2px 3px 0px #cccccc57",
        margin:"10px"
})

const [textcolor,settextcolor]=useState('black');
   const updatetheme=(bgcolor,textcolor)=>{
    setcardstyle({...cardstyle,backgroundColor:bgcolor});
   settextcolor(textcolor)
}    
    
    return(
        <div>
<h1>Dynamic and Conditional Styling</h1>
<button onClick={()=>setgrid(!grid)}>Toggle Grid</button>
<button style={{backgroundColor:"grey"}}onClick={()=>updatetheme("#ccc","red")}>Change </button>
<button style={{backgroundColor:"grey"}}onClick={()=>updatetheme('white','black')}>Default </button>
<div style={{display:grid?'flex':'block',flexWrap:"wrap"}}>
<div style={cardstyle}>
    <img style={{width:"200px"}}src="src/assets/pic.jpeg" alt="image" />
    <div style={{padding:"5px",color:textcolor}}>
        <h4>Raheel Asghar</h4>
        <p>Front End Developer</p>
    </div>
</div>
<div style={cardstyle}>
    <img style={{width:"200px"}}src="src/assets/pic.jpeg" alt="image" />
    <div style={{padding:"5px",color:textcolor}}>
        <h4>Raheel Asghar</h4>
        <p>Front End Developer</p>
    </div>
</div>
<div style={cardstyle}>
    <img style={{width:"200px"}}src="src/assets/pic.jpeg" alt="image" />
    <div style={{padding:"5px",color:textcolor}}>
        <h4>Raheel Asghar</h4>
        <p>Front End Developer</p>
    </div>
</div>
</div>
        </div>
    )
}
export default Inlines