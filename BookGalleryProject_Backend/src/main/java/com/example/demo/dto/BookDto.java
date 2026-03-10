package com.example.demo.dto;

import com.example.demo.entity.Book;
import jakarta.persistence.Column;
import lombok.Data;

@Data
public class BookDto {

    private long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String author;
    @Column(nullable = false)
    private String genre;
    @Column(nullable = false)
    private int pages;
    @Column(nullable = false)
    private int publishedYear;

    public static Book toEntity(BookDto dto){

        Book book = new Book();
        book.setId(dto.getId());
        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setGenre(dto.getGenre());
        book.setPages(dto.getPages());
        book.setPublishedYear(dto.getPublishedYear());

        return book;

    }

    public static BookDto toDto(Book book){
        BookDto dto = new BookDto();

        dto.setId(book.getId());
        dto.setTitle(book.getTitle());
        dto.setAuthor(book.getAuthor());
        dto.setGenre(book.getGenre());
        dto.setPages(book.getPages());
        dto.setPublishedYear(book.getPublishedYear());

        return dto;
    }

}
