package com.project.meetingboard.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.context.SecurityContextHolder;

import com.project.meetingboard.dto.BoardDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Board {
	
	@Id
	private String id;
	private List<String> wentWell;
	private List<String> toImprove;
	private List<String> actionItem;
	private String title;
	private String context;
	private boolean isActive = true;
	private String userEmailId; 
	private String createdOn;

	public Board(BoardDTO boardDto) {
		this.id = boardDto.getId();
		this.wentWell = boardDto.getWentWell();
		this.toImprove = boardDto.getToImprove();
		this.actionItem = boardDto.getActionItem();
		this.title = boardDto.getTitle();
		this.context = boardDto.getContext();
		this.isActive = boardDto.isActive();
		this.createdOn = boardDto.getCreatedOn();
		this.userEmailId = SecurityContextHolder.getContext().getAuthentication().getName();
	}
	
}
