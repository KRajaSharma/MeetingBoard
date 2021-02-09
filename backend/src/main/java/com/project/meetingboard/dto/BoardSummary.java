package com.project.meetingboard.dto;

import java.util.List;

import com.project.meetingboard.model.Board;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BoardSummary {

	private String id;
	private String title;
	private String context;
	private String createdOn;

	public BoardSummary(Board board) {
		this.id = board.getId();
		this.title = board.getTitle();
		this.context = board.getContext();
		this.createdOn = board.getCreatedOn();
	}
}
