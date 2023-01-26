import { Link } from "react-router-dom";
import '../styles/adminDashBoard.css'
const AdminDashBoard = () => {
    return ( 
        <div className="admindashboard">
            <div className="block1">
                <div className="top">

                </div>
                <div className="content">
                    <p style={{fontSize:"xx-large", paddingBottom:"10px",margin:"5px 0px", borderBottom:"2px solid orange"}}>At the Library this january...</p>
                    <p style={{marginTop:"0px"}}>By Erika Berlin on December 29, 2022</p>
                    <p style={{fontSize:"larger"}}>Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…</p>
                    <Link>Take a look</Link>
                </div>
            </div>
        </div>
     );
}
 
export default AdminDashBoard;