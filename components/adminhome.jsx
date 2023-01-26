import AdminNavbar from "./adminNavbar";
import '../styles/adminhome.css'
import { Routes,Route } from "react-router-dom";
import AdminDashBoard from "./adminDashBoard";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddBook from "./addbook";
import AddUsers from "./addUsers";
const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashBoard />} />
                <Route path="/book-list" element={<BookList/>} />
                <Route path="/user-list" element={<UserList/>} />
                <Route path="/book-list/:id" element={<ReadBook/>} />
                <Route path="/addbook" element={<AddBook/>} />
                <Route path="/adduser" element={<AddUsers />} />
            </Routes>
        </div>
     );
}
 
export default AdminHome;