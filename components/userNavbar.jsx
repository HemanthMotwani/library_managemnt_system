import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="admin_navbar">
            <div className="name">
                <h2>UserPortal</h2>
            </div>
            <div className="contents">
                <ul>
                    <li><Link to="/user/">Dashboard</Link></li>
                    <li><Link to="/user/book-list">Books List</Link></li>
                </ul>
            </div>
            <div className="logout">
                <Link to='/'><button>Logout</button></Link>
            </div>
        </div>
     );
}
 
export default UserNavbar;