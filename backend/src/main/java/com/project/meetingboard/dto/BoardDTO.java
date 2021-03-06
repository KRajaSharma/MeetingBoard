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
public class BoardDTO {

	private String id;
	private List<String> wentWell;
	private List<String> toImprove;
	private List<String> actionItem;
	private String title;
	private String context;
	private boolean isActive = true;
	private String createdOn;

	public BoardDTO(Board board) {
		this.id = board.getId();
		this.wentWell = board.getWentWell();
		this.toImprove = board.getToImprove();
		this.actionItem = board.getActionItem();
		this.title = board.getTitle();
		this.context = board.getContext();
		this.isActive = board.isActive();
		this.createdOn = board.getCreatedOn();
	}
}
