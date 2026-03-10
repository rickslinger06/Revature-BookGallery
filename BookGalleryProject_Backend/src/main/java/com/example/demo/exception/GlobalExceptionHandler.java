package com.example.demo.exception;

import com.example.demo.dto.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneralException(Exception ex, HttpServletRequest req){

        ErrorResponse res = new ErrorResponse();
        res.setMessage(ex.getMessage());
        res.setLocalDateTime(LocalDateTime.now());
        res.setPath(req.getServletPath());

        return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(CreateNewBookException.class)
    public ResponseEntity<ErrorResponse> handleCreateResponseException(CreateNewBookException ex, HttpServletRequest req){

        ErrorResponse res = new ErrorResponse();
        res.setMessage(ex.getMessage());
        res.setLocalDateTime(LocalDateTime.now());
        res.setPath(req.getServletPath());

        return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(BookNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleBookNotFoundException(BookNotFoundException ex, HttpServletRequest req){

        ErrorResponse res = new ErrorResponse();
        res.setMessage(ex.getMessage());
        res.setLocalDateTime(LocalDateTime.now());
        res.setPath(req.getServletPath());

        return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
    }


}
