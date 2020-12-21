package com.project.meetingboard.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.project.meetingboard.dto.CreateUserRequestDTO;
import com.project.meetingboard.model.UserDetails;
import com.project.meetingboard.repository.UserDetailsRepository;
import com.project.meetingboard.service.UserDetailsService;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserDetailsRepository repository;
	
	@Override
	public UserDetails createNewUser(CreateUserRequestDTO request) {

		return repository.save(new UserDetails(request.getEmailId(), request.getPassword(), null));
		
		
	}

}
