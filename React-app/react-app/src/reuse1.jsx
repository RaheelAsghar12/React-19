const Data=({data})=>{
return(
    <div style={{border:"5px solid black",width:"250px",height:"150px", margin:"10px", padding:"5px", borderRadius:"5px"}}>
        <h4>Name is <span style={{color:"Red"}}>{data.name}</span></h4>
        <h4>Marks are <span style={{color:"Green"}}>{data.marks}</span></h4>
        <h4>Email is <span style={{color:"blue"}}>{data.email}</span></h4>
    </div>
)
}
export default Data