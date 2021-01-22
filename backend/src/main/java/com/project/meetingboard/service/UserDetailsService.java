package com.project.meetingboard.service;
import javax.servlet.http.HttpServletRequest;

import com.project.meetingboard.dto.CreateUserRequestDTO;
import com.project.meetingboard.dto.ResetPasswordRequest;
import com.project.meetingboard.model.UserDetails;

public interface UserDetailsService {
   public UserDetails createNewUser(CreateUserRequestDTO request);

   public String forgotPassword(String userEmail);
   
   public String resetPassword(ResetPasswordRequest request);
   
}
