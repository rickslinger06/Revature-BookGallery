import type { Book } from "../data/Book";

const baseUrl = "http://localhost:8080"

export const getAllBooks = async () : Promise<Book[]> => {

    const res = await fetch(`${baseUrl}/books`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return res.json();
    
}

export const createBook = async (book:Book) : Promise<Book> => {
    const res = await fetch(`${baseUrl}/books`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });

    return res.json();
}