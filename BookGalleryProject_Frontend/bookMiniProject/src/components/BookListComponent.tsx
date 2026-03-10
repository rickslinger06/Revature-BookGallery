import type { Book } from "../data/Book";

type BookListProps = {
  books: Book[];
};

function BookListComponent({ books }: BookListProps) {
  return (
    <>
      <div>
        <table>
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
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.pages}</td>
                <td>{book.publishedYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BookListComponent;