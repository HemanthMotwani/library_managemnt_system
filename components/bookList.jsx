import '../styles/bookList.css'
import { useEffect, useState } from "react";
import { useNavigate,useLocation } from 'react-router-dom';

const BookList = () => {
    let [books,setBooks]=useState([])
    let location=useLocation()
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:1001/books")
            let data=await response.json()
            setBooks(data)
            console.log(data);
        }
        fetchData()
        
    },[books])
    //Delete a book from user
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:1001/books/${id}`,{
            method:'DELETE'
        });
        alert(`${title} will be deleted permanently`)
    }
    let navegate=useNavigate();

    //to fetch the data from user
    let read=(id)=>{
        if(location.pathname == '/admin/book-list'){
            navegate(`/admin/book-list/${id}`)
        }
        else{
            navegate(`/user/book-list/${id}`)
        }
    }
    return ( 
        <div className="bookList">
            <h1 style={{marginTop:"0px",textAlign:"center",color:"white"}}>Book List: {books.length}</h1>
            <div className="books_section">
                {books.map(data=>(
                    <div className="book_card">
                       <div className="book-img">
                        <img src={data.thumbnailUrl} alt="" />
                       </div>
                       <div className="book-details">
                       <h3>{data.title} </h3>
                        <h6>PageCount:{data.pageCount} </h6>
                        <h6><b>Authors:</b> {data.authors}</h6>
                        <h6><b>category:</b>{data.categories} </h6>
                        <button  onClick={()=>read(data.id)}>Read more</button>
                        { location.pathname == '/admin/book-list' && <button style={{marginLeft:"20px"}} onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                       </div>
                    </div>
                )  )}
            </div>
        </div>
     );
}
 
export default BookList;