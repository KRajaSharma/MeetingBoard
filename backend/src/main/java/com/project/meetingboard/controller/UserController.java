package com.project.meetingboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.meetingboard.dto.CreateUserRequestDTO;
import com.project.meetingboard.model.UserDetails;
import com.project.meetingboard.service.UserDetailsService;

@RestController
@RequestMapping(path = "v1/user")
public class UserController {
	
	@Autowired
	private UserDetailsService userDetails;

	@PutMapping
	public ResponseEntity<UserDetails> createUser(@RequestBody CreateUserRequestDTO user){
		
		final UserDetails createdUser = userDetails.createNewUser(user);
		return ResponseEntity.ok().body(createdUser);
	}
	
}
