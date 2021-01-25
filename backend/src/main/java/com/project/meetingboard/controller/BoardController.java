package com.project.meetingboard.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.meetingboard.dto.CreateUserRequestDTO;

@RestController
@RequestMapping(path = "v1/board")
public class BoardController {

	@GetMapping
	public ResponseEntity<String> createNewBoard(CreateUserRequestDTO request){
		return ResponseEntity.ok("Hello");
	}
}
