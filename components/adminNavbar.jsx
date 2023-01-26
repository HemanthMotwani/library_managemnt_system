import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="admin_navbar">
            <div className="name">
                <h2>AdminPortal</h2>
            </div>
            <div className="contents">
                <ul>
                    <li><Link to="/admin/">Dashboard</Link></li>
                    <li><Link to="/admin/addbook">Add Books</Link></li>
                    <li><Link to="/admin/adduser">Add Users</Link></li>
                    <li><Link to="/admin/book-list">Books List</Link></li>
                    <li><Link to="/admin/user-list">Users List</Link></li>
                </ul>
            </div>
            <div className="logout">
                <Link to='/'><button>Logout</button></Link>
            </div>
        </div>
     );
}
 
export default AdminNavbar;