package com.project.meetingboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.meetingboard.dto.CreateUserRequestDTO;
import com.project.meetingboard.dto.ResetPasswordRequest;
import com.project.meetingboard.model.UserDetails;
import com.project.meetingboard.service.UserDetailsService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping(value = "v1/user")
public class UserController {

	@Autowired
	private UserDetailsService userDetailsService;

	@PutMapping()
	public ResponseEntity<UserDetails> createUser(@RequestBody CreateUserRequestDTO user) {
		log.debug("create user api invoked");
		final UserDetails createdUser = userDetailsService.createNewUser(user);
		return ResponseEntity.ok(createdUser);
	}

	@PostMapping(path = "/_forgotPassword")
	public ResponseEntity<String> forgotPassword(@RequestParam("emailid") String userEmail) {
		log.debug("Forgot Password api invoked");
		final String response = userDetailsService.forgotPassword(userEmail);
		return ResponseEntity.ok(response);
	}

	@PostMapping("/_resetPassword")
	public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest request) {
		log.debug("Reset Password api invoked");
		String message = userDetailsService.resetPassword(request);
		log.info(message);
		return ResponseEntity.ok(message);
	}

	@GetMapping(path = "/test")
	public String helloWorld() {
		return "resetpassword";
	}

}
