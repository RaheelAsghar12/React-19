const alerts=(name)=>
    alert(name)
function Oper(){
   const numbers = [1, 2, 3,4];
const squares = numbers.map(num => num * num);

const oper=(a,b)=>a+b;
const alerts=(name)=>
    alert(name)
return(
    <div>
        {squares}
        <h1>Sum is {oper(10,5)}</h1>
        <button onClick={()=>alerts("Ali Hussnain")}>Click</button>
    </div>
)

}
export default Oper