import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/addbook.css'
const AddBook = () => {
    //title,catrgories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,settitle]=useState("")
    let [authors,setauthors]=useState("")
    let [catrgories,setcatrgories]=useState("")
    let [pageCount,setpageCount]=useState("")
    let [shortDescription,setshortDescription]=useState("")
    let [longDescription,setlongDescription]=useState("")
    let [thumbnailUrl,setthumbnailUrl]=useState("")
    let navigate=useNavigate();
    let handleSubmit = (e) =>{
        e.preventDefault();
        let bookData={title,authors,catrgories,pageCount,shortDescription,longDescription,thumbnailUrl};
        fetch(`http://localhost:1001/books`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
    })
    alert(`added`)
    navigate('/admin/book-list')
    }
    return ( 
        < div className="addbook">
            <h1 id="add_book_heading">Add a book</h1>
            < div className="form">
                <form action="" onSubmit={handleSubmit}>
                    < div className="title">
                        <input style={{marginRight:"25px"}} type="text" required placeholder="title" value={title} onChange={(e)=>settitle(e.target.value)} />
                        <input type="text" required placeholder="authors" value={authors} onChange={(e)=>setauthors(e.target.value)}/>
                    </ div>
                    < div className="categories">
                    <input style={{marginRight:"25px"}} type="text" required placeholder="categories" value={catrgories}  onChange={(e)=>setcatrgories(e.target.value)}/>
                    <input type="number" required placeholder="pagecount" value={pageCount}  onChange={(e)=>setpageCount(e.target.value)} /> 
                    </ div>
                    < div className="shortDescription">
                        <textarea placeholder="shortDescription" cols="50" rows="3" value={shortDescription}  onChange={(e)=>setshortDescription(e.target.value)}></textarea>
                    </ div>
                    < div className="longDescription">
                        <textarea placeholder="longDescription" cols="50" rows="10" value={longDescription}  onChange={(e)=>setlongDescription(e.target.value)}></textarea>    
                    </ div>
                    < div style={{textAlign:"left", marginLeft:"20px"}} className="thumbnailUrl">
                        <input type="text" placeholder="thumbnailUrl" required value={thumbnailUrl}  onChange={(e)=>setthumbnailUrl(e.target.value)} />    
                    </ div>
                    <div style={{textAlign:"left", marginLeft:"20px"}} className="formbutton">
                        <button className="button">Add Book</button>
                    </div>
                </form>
            </ div>
        </ div>
     );
}
 
export default AddBook;