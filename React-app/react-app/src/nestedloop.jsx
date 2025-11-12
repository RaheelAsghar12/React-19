

function Nested() {
    const collegeData = [
        {
            name: "Degree",
            city: "Skp",
            email: "www.degreecol.com",
            student: [{
                name: "Raheel",
                marks: "99",
                email: "raheel@gmail.com"
            },
            {
                name: "Hassan",
                marks: "99",
                email: "hassan@gmail.com"
            }, {
                name: "ali",
                marks: "99",
                email: "ali@gmail.com"
            }]
        },
        {
            name: "punjab",
            city: "islamabad",
            email: "www.punjabcol.com",
            student: [{
                name: "Raheel",
                marks: "99",
                email: "raheel@gmail.com"
            }, {
                name: "ali",
                marks: "99",
                email: "ali@gmail.com"
            },
            {
                name: "Hassan",
                marks: "99",
                email: "hassan@gmail.com"
            }]
        },
        {
            name: "Aspire",
            city: "Lahore",
            email: "www.aspirecol.com",
            student: [{
                name: "Raheel",
                marks: "99",
                email: "raheel@gmail.com"
            }, {
                name: "Hassan",
                marks: "99",
                email: "hassan@gmail.com"
            }, {
                name: "ali",
                marks: "99",
                email: "ali@gmail.com"
            }]
        }
    ]
    return (
        <div>
            <h1>Nested Loop</h1>
            <br />
            <br />

            {
                collegeData.map((college, index) => (
                    <div key={index} style={{ padding: "2px", backgroundColor: "lightskyblue", margin: "7px", borderRadius: "10px", width: "300px" }}>

                        <ul>
                            <li><h4>  Name : {college.name}</h4></li>
                            <li><h4>City : {college.city}</h4></li>
                            <li><h4>Email : {college.email}</h4></li>
                            <li><h4>Student Info</h4>
                                {college.student.map((student, index) => (
                                    <div key={index} style={{ backgroundColor: "yellow", border: "2px solid black", width: "200px", borderRadius: "8px", margin: "10px" }}>
                                        <ul>
                                            <li><h5>{student.name}
                                            </h5></li>
                                            <li><h5>{student.marks}</h5></li>
                                            <li><h5>{student.email}</h5></li>

                                        </ul>
                                    </div>
                                ))}
                            </li>
                        </ul>

                    </div>
                ))
            }
        </div>
    )
}
export default Nested