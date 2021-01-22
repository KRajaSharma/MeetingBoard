package com.project.meetingboard.exception;

import java.util.Date;

import javax.mail.SendFailedException;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSendException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@ControllerAdvice
@RestController
@Slf4j
public class CustomExceptionHandler {

	@ExceptionHandler(DuplicateKeyException.class)
	public final ResponseEntity<ExceptionResponse> handleEntityNotFoundException(Exception ex) {
		log.error(ex.getMessage(), ex);
		ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(), "User with same emailId already exists",
				ex.getMessage());
		return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(UsernameNotFoundException.class)
	public final ResponseEntity<ExceptionResponse> handleUsernameNotFoundException(Exception ex) {
		log.error(ex.getMessage(), ex);
		ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(), "Invalid Email Id", ex.getMessage());
		return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(MailSendException.class)
	public final ResponseEntity<ExceptionResponse> handleSendFailedException(Exception ex) {
		log.error(ex.getMessage(), ex);
		ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(), "Error Sending Email", ex.getMessage());
		return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
	}
}
