function Wrapper({children,color="blue"}){
    return(
        <div style={{color:color,margin:"10px",border:"5px solid blue",width:"250px"}}>
            {children}
        </div>
    )
}
export default Wrapper