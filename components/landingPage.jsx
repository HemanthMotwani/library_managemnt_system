import '../styles/landingPage.css'
import { Link } from "react-router-dom";
const LandingPage = () =>{
    return (
        <div className="landingpage">
            <div className="selectLoginType">
                <h1>Library Management System</h1>
                <div className="images">
                <img id='img1' src="login_image.jpg" alt="" />
                <img id='img2' src="login_image.jpg" alt="" />
                </div>
                <Link to='/admin-login' id='admin_button'><button>Admin Login</button></Link>
                <Link to='/user-login' id='user_button'><button>User Login</button></Link>
            </div>
        </div>
    )
}
export default LandingPage;