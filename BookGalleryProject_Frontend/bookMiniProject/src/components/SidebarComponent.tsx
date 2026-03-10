import { useEffect, useState } from "react";
import type { Book } from "../data/Book";
import { getBooksWithFilter } from "../services/BookService";
import BookListComponent from "./BookListComponent";

function SidebarComponent() {
  const [books, setBooks] = useState<Book[]>([]);
  const [genre, setGenre] = useState<string>();
  const [author, setAuthor] = useState<string>();

  useEffect(() => {
    getBooksWithFilter(genre,author).then((data) => {
      setBooks(data);
    });
  }, [genre, author]);

  const toggleGenre = (value:string) => {
    setGenre(prev => prev === value ? "" : value)
  }

  const toggleAuthor = (value:string) => {
    setAuthor(prev => prev === value ? "": value)
  }

  return (
    <>
      <div>
        <h4 className=" filter mt-5">Filter:</h4>

        <h5>Genre</h5>

        <button className= {` btn btn-secondary btn-genre  ${genre === "Fiction" ? "active" :""}` } onClick={() => toggleGenre("Fiction")}>Fiction</button>
        <button className={` btn btn-secondary btn-genre ${genre === "Dystopian" ? "active" :""}`} onClick={() => toggleGenre("Dystopian")}>Dystopian</button>
        <button className={` btn btn-secondary btn-genre ${genre === "Fantasy" ? "active" :""}`} onClick={() => toggleGenre("Fantasy")}>Fantasy</button>
        <button className={` btn btn-secondary btn-genre ${genre === "Classic" ? "active" :""}`} onClick={() => toggleGenre("Classic")}>Classic</button>
        <button className={` btn btn-secondary btn-genre ${genre === "Science" ? "active" :""}`} onClick={() => toggleGenre("Science")}>Science</button>

        <h5>Author</h5>
        <button className={` btn btn-secondary btn-author btn btn-secondary btn-genre ${author === "J.D. Salinger" ? "active":""}`} onClick={() => toggleAuthor("J.D. Salinger")}>J.D. Salinger</button>
        <button className={` btn btn-secondary btn-author ${author === "George Orwell" ? "active":""}`} onClick={() => toggleAuthor("George Orwell")}>George Orwell</button>
        <button className={` btn btn-secondary btn-author ${author === "F. Scott Fitzgerald" ? "active":""}`} onClick={() => toggleAuthor("F. Scott Fitzgerald")}>F. Scott Fitzgerald</button>
       <button className={` btn btn-secondary btn-author ${author === "J.R.R. Tolkien" ? "active":""}`} onClick={() => toggleAuthor("J.R.R. Tolkien")}>J.R.R. Tolkien</button>
      <button className={` btn btn-secondary btn-author ${author === "Aldous Huxley" ? "active":""}`} onClick={() => toggleAuthor("Aldous Huxley")}>Aldous Huxley</button>
        
      </div>
    

      <div>
        <h2 className="text-center mt-3">Books</h2>
        <BookListComponent books={books} />
      </div>

      <div>

           {
          books.length === 0 &&
          <p className="text-center mt-5 text-danger">No books found matching these filters.</p>
        }
      </div>
    </>
  );
}

export default SidebarComponent;