function Loopmap(){
    const userData=[
        {name:"Raheel",
        marks:"90",
        email:"raheel@gmail.com"
        },
        {name:"Ali",
        marks:"99",
        email:"ali@gmail.com"
        },
        {name:"Hamza",
        marks:"95",
        email:"hamza@gmail.com"
        }
    ]
    return(
        <div>
            <h1>Loops with Map Function</h1>
       <table border="1">
        <thead>
            <tr>
                <td>Name</td>
                <td>Marks</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {userData.map((user)=>
            <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.marks}</td>
                <td>{user.email}</td>
            </tr>)}
        </tbody>
       </table>
       
        </div>
    )
}
export default Loopmap