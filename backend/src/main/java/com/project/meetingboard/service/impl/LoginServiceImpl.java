package com.project.meetingboard.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.project.meetingboard.dto.UserDetailsDTO;
import com.project.meetingboard.model.UserDetails;
import com.project.meetingboard.repository.UserDetailsRepository;
import com.project.meetingboard.service.LoginService;

@Component
public class LoginServiceImpl implements LoginService {

	@Autowired
	private UserDetailsRepository repo;
	
	@Override
	public UserDetailsDTO login() {
	final String emailId = SecurityContextHolder.getContext().getAuthentication().getName();
	final UserDetails userDetails = repo.findByEmailId(emailId);
		return new UserDetailsDTO(userDetails.getId(), userDetails.getEmailId(), userDetails.getBoards());
	}

}
