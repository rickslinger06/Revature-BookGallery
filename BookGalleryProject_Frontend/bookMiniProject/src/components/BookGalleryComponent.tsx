import { useEffect, useState } from "react";
import type { Book } from "../data/Book";
import { getAllBooks } from "../services/BookService";

function BookGalleryComponent() {

    const[books, setBooks] = useState<Book[]>([]);

    useEffect( () =>{
        getAllBooks()
        .then((data) =>
        {
            setBooks(data);
          
        })
  
        
    }, []);


  return (
  <>
    <h1>Book Gallery </h1>

    <table id="table-container"> 
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Pages</th>
                <th>Published Year</th>
            </tr>
        </thead>

        <tbody>

    {
        books.map(b => (
            <tr key={b.id}>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.genre}</td>
                <td>{b.pages}</td>
               <td>{b.publishedYear}</td>
            </tr>
        ))
    }

        </tbody>

    </table>



  </>
  )
}

export default BookGalleryComponent
