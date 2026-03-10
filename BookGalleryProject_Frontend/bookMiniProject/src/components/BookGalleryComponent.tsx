import { useEffect, useMemo, useState } from "react";
import type { Book } from "../data/Book";
import { getAllBooks } from "../services/BookService";

function BookGalleryComponent() {

    const[books, setBooks] = useState<Book[]>([]);
    const[currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 5;


    useEffect( () =>{
        getAllBooks()
        .then((data) =>
        {
            setBooks(data);
     })
        
    }, []);

   const totalPages = Math.ceil(books.length / itemPerPage);

   const currentBooks = useMemo(() => {
    const startIndex = (currentPage -1) * itemPerPage;
    return books.slice(startIndex, startIndex + itemPerPage);
   },[books,currentPage])
    

  return (
  <>
        <div>
            <h1 className="text-center mt-5">Book Gallery </h1>

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
        currentBooks.map(b => (
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
        <div className="mt-3 text-center">
            <button onClick={() => setCurrentPage((prev) => prev -1) } className="btn btn-primary" disabled={currentPage ===1}>prev</button>
            <span style={{margin:"0 10px"}}>{currentPage}/{totalPages}</span>
            <button onClick={() => setCurrentPage((prev => prev +1))} className="btn btn-primary m-3" disabled={currentPage === totalPages || totalPages === 0}>next</button>
        </div>
    </table>
        </div>

 
  </>
  )
}

export default BookGalleryComponent
