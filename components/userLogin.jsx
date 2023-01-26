import { Navigate, useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () => {
    let navigate=useNavigate()
    let login=()=>{
        navigate('/user/')
    }
    return ( 
        <div className="userlogin">
            <div className="user_form">
                <h1>Login As User</h1>
                <div className="user_form_input">
                    <form onSubmit={login}>
                        <div className="user_mail">
                            <label style={{fontSize:"large"}} htmlFor="">Email :</label>
                            <br />
                        <input type="emial" required  placeholder="Enter Email" />
                        </div>
                        <div className="user_password">
                            <label style={{fontSize:"large"}} htmlFor="">Password :</label>
                            <br />
                            <input type="password" required placeholder="Enter Password" />
                        </div>
                        <button >Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;