import { Suspense, use } from "react";

//const fetchData=()=>fetch("https://dummyjson.com/users").then((response)=>response.json());
const fetchData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error aya:", error);
    }
};
const user = fetchData();

function UseAPi() {
    return (
        <div>
            <h1>
                use Api in React Js
            </h1>
            {
                <Suspense fallback={<h3>Loading...</h3>}><User user={user}/></Suspense>
            }
        </div>
    )
}
export default UseAPi

const User = ({user}) => {
    const userData=use(user);
    return (
        <div>
            <h1>
User list
            </h1>
            {
                userData.users.map((data)=>(
                    <h1>{data.firstName}</h1>
                ))
            }
        </div>
    )
}