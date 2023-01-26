import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const ReadBook = () => {
    let params=useParams();
    let [book,setBook]=useState([])
    useEffect( () =>{
        let fetchData=async()=>{
            let response=await fetch(`http://localhost:1001/books/${params.id}`)
            let data= await response.json()
            setBook(data)
        }
        fetchData()
    });
    return ( 
        <div style={{border:"1px solid black", margin:"auto", width:"80%", marginTop:"40px", padding:"30px", background:"white" }} className="readBook">
            <h1 style={{textAlign:"center"}}>Read Book</h1>
            <h2 style={{color:"green"}}>{book.title}</h2>
            <p style={{color:"blue"}}>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;