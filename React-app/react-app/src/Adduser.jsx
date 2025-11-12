function Adduser({adduser}){
    return(

      <div>
          <h1>Add User</h1>
        <input type="text" onChange={(event)=>adduser(event.target.value)} placeholder="Add User"/>
      </div>
    )
}
export default Adduser