package com.project.meetingboard.service;
import com.project.meetingboard.dto.CreateUserRequestDTO;
import com.project.meetingboard.model.UserDetails;

public interface UserDetailsService {
   public UserDetails createNewUser(CreateUserRequestDTO request);
}
