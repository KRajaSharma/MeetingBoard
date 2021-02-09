package com.project.meetingboard.service;

import java.util.List;

import com.project.meetingboard.dto.BoardDTO;
import com.project.meetingboard.dto.BoardSummary;
import com.project.meetingboard.dto.ResponseDTO;

public interface BoardService {

	public ResponseDTO upsert(BoardDTO request);
	public List<BoardSummary> getBoardSummary();
	public BoardDTO getBoard(String boardId);
}
