package com.project.meetingboard.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.project.meetingboard.dto.CreateUserRequestDTO;
import com.project.meetingboard.model.UserDetails;
import com.project.meetingboard.repository.UserDetailsRepository;
import com.project.meetingboard.service.UserDetailsService;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserDetailsRepository repository;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public UserDetails createNewUser(CreateUserRequestDTO request) {

		log.debug("create new user service impl");
		return repository.save(new UserDetails(request.getEmailId(), encoder.encode(request.getPassword()), new ArrayList<>()));
		
		
	}

}
