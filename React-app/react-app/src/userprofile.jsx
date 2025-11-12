import style from './css/userprofile.module.css'
function Userprofile(){
    return(
        <div>
            <h1 className={style.heading}>Module Css</h1>
            <br />
            <div>
            <div><img src="/src/assets/pic.jpeg" alt="" /></div>
          <div>  <h3>Raheel Asghar</h3>
          <p>Software Developer</p>
        </div>
        </div>
        </div>
    )
    
}
export default Userprofile