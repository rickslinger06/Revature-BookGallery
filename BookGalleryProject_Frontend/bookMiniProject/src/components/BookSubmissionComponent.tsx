/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Book } from "../data/Book";
import { createBook } from "../services/BookService";

function BookSubmissionComponent() {

  const navigate = useNavigate();

  const[book, setBook] = useState<Book>({
    id: 0,
    title: "",
    author:"",
    genre: "",
    pages: 0,
    publishedYear: 0
  });

  const[createmessage, setCreateMessage] = useState("");


  const handleChange = (e:any) => {
    const {name, value} = e.target;

    setBook({
      ...book,
      [name]: value
    })

  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    createBook(book)
    .then((data) => {
      setBook(data);
      setCreateMessage("Book created successfully!");
      navigate("/")
    },
    (error) => {
      setCreateMessage("Failed to create book. Please try again.");
      console.log(error);
    }
    )


  }


  return (
   <>

   <div className="container mt-5" style={{width:"600px"}}>
    <div className="card-body">
      <div className="card">
        <form  onSubmit={handleSubmit}> 
      <label htmlFor="title">Title</label>
    <input 
        className="form-control"
          type="text"
          name = "title"
          onChange={handleChange}
          placeholder="title" 
          value={book.title}/>

    <label htmlFor="author">Author</label>
    <input type="text" 
          className="form-control"
          name = "author"
          onChange={handleChange}
          placeholder="author" 
          value={book.author}/>
    
    <label htmlFor="genre">Genre</label>
    <input type="text"
          className="form-control"
          name = "genre"
          onChange={handleChange}
          placeholder="genre" 
          value={book.genre}/>
          
    <label htmlFor="pages">Pages</label>
    <input type="number"
          className="form-control"
          name = "pages"
          onChange={handleChange}
          placeholder="pages" 
          value={book.pages}/>
          
    <label htmlFor="publishedYear">Published Year</label>
    <input type="number"
           className="form-control"
          name = "publishedYear"
          onChange={handleChange}
          placeholder="published year" 
          value={book.publishedYear}/>

     <button className=" d-flex text-center mb-3 mt-3 btn btn-primary" type="submit">Submit</button>
   </form>

      </div>
      {
        createmessage && 
        <div className="alert alert-info mt-3" role="alert">
          {createmessage}
        </div>
      }

    </div>

   </div>

   



   
   </>
  )
}

export default BookSubmissionComponent
