package com.example.demo.controller;

import com.example.demo.dto.BookDto;
import com.example.demo.entity.Book;
import com.example.demo.services.BookService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin({"http://localhost:5173/"})
public class BookController {
    private final BookService bookService;

    @PostMapping("/books")
    public ResponseEntity<BookDto>  createBoook(@RequestBody BookDto book){

        BookDto newBook = bookService.createNewBook(book);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBook);

    }

    @GetMapping("/books")
    public ResponseEntity<List<BookDto>> getAllBooks(@RequestParam(name="genre" , required=false) String genre ,@RequestParam(name="author", required=false) String author){

        List<BookDto> books = bookService.getAllBooks(genre,author);

        return ResponseEntity.ok().body(books);

    }

    @GetMapping("/books/{id}")
    public ResponseEntity<BookDto> getBookById(@PathVariable long id){

        BookDto book = bookService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(book);

    }

    @DeleteMapping("books/{id}")
    public ResponseEntity<?> deleteBookById(@PathVariable long id){
        //not implemented in service layer Not required
        bookService.deleteBookById(id);

        return ResponseEntity.status(405).build();
    }

    @PutMapping("books/{id}")
    public ResponseEntity<?> updateBookById(@PathVariable long id){
        //not implemented in service layer
        return ResponseEntity.status(405).build();
    }

    @PatchMapping("books/{id}")
    public ResponseEntity<?> patchBookById(@PathVariable long id){
        //not implemented in service layer
        return ResponseEntity.status(405).build();
    }


}
