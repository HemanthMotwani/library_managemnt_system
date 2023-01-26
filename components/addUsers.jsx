import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const AddUsers = () => {
    let [name,setname]=useState("")
    let [age,setage]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let navigate=useNavigate()
    let handleSubmit=(e) =>{
        e.preventDefault();
        let userData={name,age,phone,email};
        fetch(`http://localhost:1001/users`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('user added')
        navigate('/admin/user-list')
    }
    return ( 
        <div className="addusers">
            <h1 style={{textAlign:"center",color:"orange"}}>Add new user</h1>
            <div className="form" onSubmit={handleSubmit}>
                <form action="" >
                    <div className="username">
                        <input type="text" required placeholder="user name" value={name} onChange={(e)=>setname(e.target.value)} />
                    </div>
                    <div className="age">
                        <input type="number" min='1' required placeholder="user age" value={age} onChange={(e)=>setage(e.target.value)} />
                    </div>
                    <div className="phone">
                        <input type="tel" minLength='10' maxLength='10' required placeholder="Phone no" value={phone} onChange={(e)=>setphone(e.target.value)}/>
                    </div>
                    <div className="email">
                        <input type="email" required placeholder="user email" email={name} onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <button>Add User</button>
                </form>
                    
            </div>
        </div>
     );
}
 
export default AddUsers;