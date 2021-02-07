package com.project.meetingboard.service.impl;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.project.meetingboard.dto.CreateUserRequestDTO;
import com.project.meetingboard.dto.ResetPasswordRequest;
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

	@Autowired
	private JavaMailSender mailSender;

	private Random rand = new Random();

	@Override
	public UserDetails createNewUser(CreateUserRequestDTO request) {
		log.debug("create new user service impl");
		return repository
				.save(new UserDetails(request.getEmailId(), encoder.encode(request.getPassword()), new ArrayList<>()));
	}

	@Override
	public String forgotPassword(String userEmail) {

		UserDetails user = repository.findByEmailId(userEmail);
		if (user == null) {
			throw new UsernameNotFoundException("User not found");
		}

		// Generate Random Token
		String token = generateRandomString(5);

		user.setResetToken(token);

		// save token to db
		repository.save(user);

		// Send Email message
		return sendMail(token, userEmail);
	}

	@Override
	public String resetPassword(ResetPasswordRequest request) {

		final String token = request.getToken();
		final String password = request.getNewPassword();

		UserDetails user = repository.findByResetToken(token);
		if (user == null) {
			throw new UsernameNotFoundException("Invalid Token");
		} else {
			user.setPassword(encoder.encode(password));
			user.setResetToken(null);
			repository.save(user);
			log.info("Password Reset Successful");
			return "You have successfully changed your password.";
		}
	}

	public String generateRandomString(int length) {
		int leftLimit = 48; // numeral '0'
		int rightLimit = 122; // letter 'z'

		return rand.ints(leftLimit, rightLimit + 1).filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
				.limit(length).collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
				.toString();
	}

	public String sendMail(String body, String userEmail) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("rsharmaop@yahoo.com");
		message.setTo(userEmail);
		message.setSubject("Forgot Password Mail");
		message.setText("To reset password, use following code: \n" + body);
		mailSender.send(message);
		return "Mail Sent";
	}
}
