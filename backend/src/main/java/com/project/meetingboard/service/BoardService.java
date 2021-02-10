package com.project.meetingboard.service;

import java.util.List;

import com.project.meetingboard.dto.BoardDTO;
import com.project.meetingboard.dto.BoardSummary;

public interface BoardService {

	public BoardDTO upsert(BoardDTO request);
	public List<BoardSummary> getBoardSummary();
	public BoardDTO getBoard(String boardId);
}
