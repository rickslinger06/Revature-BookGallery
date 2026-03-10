package com.example.demo.services;

import com.example.demo.dto.BookDto;
import com.example.demo.entity.Book;

import java.util.List;

public interface BookService {
    BookDto createNewBook(BookDto book);

    List<BookDto> getAllBooks(String genre, String author);

    BookDto findById(long id);

    void deleteBookById(long id);
}
