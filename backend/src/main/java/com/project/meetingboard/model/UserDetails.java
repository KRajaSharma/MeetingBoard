package com.project.meetingboard.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDetails {

	@Id
	private String id;
	@Indexed(unique = true)
	private String emailId;
	private String password;
	private List<String> boards;
	
	public UserDetails(String emailId, String password, List<String> boards) {
		super();
		this.emailId = emailId;
		this.password = password;
		this.boards = boards;
	}

	

}
