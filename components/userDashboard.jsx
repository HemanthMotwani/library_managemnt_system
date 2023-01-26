
import '../styles/userDashboard.css'
const UserDashBoard = () => {
    return ( 
        <div className="user_dash_board">
            <div className="learning_lab">
                <p style={{fontSize:"60px",color:"black",margin:"0px",borderBottom:"2px solid skyblue",width:"400px"}}>Learning Lab</p>
                <p style={{fontSize:"large"}}>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and patrons can empower themselves with a practical understanding of current technology.</p>
            </div>
            <div className="linkedin_learing">
                <div className="image">
    
                </div>
                <div className="linkedin_text">
                    <p style={{margin:"0px"}}>RETURN</p>
                    <p style={{fontSize:"60px",color:"black",margin:"0px",borderBottom:"2px solid skyblue",width:"500px"}}>LinkedIn Learning</p>
                    <p style={{fontSize:"large"}}>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="bottom_text">
                    <p style={{fontSize:"60px",color:"white",margin:"0px"}}>Learn Something New or Get Tech Help</p>
                    <p style={{fontSize:"large"}}>Register on the online calendar. For more information call (203) 622-7920.</p>
                    <button>view calendar</button>
            </div>
        </div>
     );
}
 
export default UserDashBoard;