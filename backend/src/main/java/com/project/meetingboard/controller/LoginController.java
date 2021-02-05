package com.project.meetingboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.meetingboard.dto.UserDetailsDTO;
import com.project.meetingboard.service.LoginService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping(value = "v1/login")
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@GetMapping
	public UserDetailsDTO login() {
		log.debug("Login Controller Invoked");
		return loginService.login();
	}
}
