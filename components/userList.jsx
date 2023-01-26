import { useEffect, useState } from "react";
import '../styles/userlist.css'
const UserList = () => {
    let [user,setUser]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:1001/users")
            let data=await response.json()
            setUser(data)
            console.log(data);
        }
        fetchData()
    },[] )
    let handleRemove=(id,name)=>{
        setUser(user.filter(x=>x.id!==id) )
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="userList">
            <h1 id="ul">User Lists: {user.length} </h1>
                <div className="user_section">
                    {user.map( data=>(
                        <div className="user">
                            <h1><b>Id: </b>{data.id} </h1>
                        <h4><b>Name: </b>{data.name}</h4>
                        <h4><b>age: </b>{data.age}</h4>
                        <h4><b>phonenumber: </b>{data.phone}</h4>
                        <h4><b>email: </b>{data.email}</h4>
                        <button onClick={()=>handleRemove(data.id,data.name)}>Remove</button>
                        </div>
                    ) )}
                </div>
        </div>
     );
}
 
export default UserList;