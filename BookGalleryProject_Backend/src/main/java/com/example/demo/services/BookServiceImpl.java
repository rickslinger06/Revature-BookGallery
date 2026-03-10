package com.example.demo.services;

import com.example.demo.dto.BookDto;
import com.example.demo.entity.Book;
import com.example.demo.exception.BookNotFoundException;
import com.example.demo.exception.CreateNewBookException;
import com.example.demo.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService{

    private final BookRepository bookRespository;
    @Override
    public BookDto createNewBook(BookDto book) {

        Book newBook = BookDto.toEntity(book);

        Book savedBook = bookRespository.save(newBook);
        if(savedBook == null){
            throw new CreateNewBookException("Error on Creating new Book");
        }

        return BookDto.toDto(savedBook);
    }

    @Override
    public List<BookDto> getAllBooks(String genre, String author) {

        List<Book> books = bookRespository.findAll();

        List<BookDto> booksDto = new ArrayList<>();

        for(Book b : books){
            booksDto.add(BookDto.toDto(b));
        }

        if (genre != null) {
            booksDto = booksDto.stream().filter(g -> g.getGenre().equalsIgnoreCase(genre)).toList();
        }
        if(author != null){
            booksDto = booksDto.stream().filter(a -> a.getAuthor().equalsIgnoreCase(author)).toList();
        }

        List<BookDto> sortedBook =booksDto.stream().sorted(Comparator.comparingLong(BookDto::getId))
                .toList();

        return sortedBook;
    }

    @Override
    public BookDto findById(long id) {
        Book book = bookRespository.findById(id).orElseThrow(
                () -> new BookNotFoundException("Book not found")
        );

        return BookDto.toDto(book);
    }

    @Override
    public void deleteBookById(long id) {

    }
}
