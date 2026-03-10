package com.example.demo.dto;

import lombok.Data;

import java.time.LocalDateTime;
@Data
public class ErrorResponse {

    private String message;
    private LocalDateTime localDateTime;
    private String path;
}
