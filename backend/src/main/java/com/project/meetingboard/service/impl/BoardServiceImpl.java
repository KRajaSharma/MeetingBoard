package com.project.meetingboard.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.project.meetingboard.dto.BoardDTO;
import com.project.meetingboard.dto.BoardSummary;
import com.project.meetingboard.exception.EntityNotFoundException;
import com.project.meetingboard.model.Board;
import com.project.meetingboard.repository.BoardRepository;
import com.project.meetingboard.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardRepository repo;

	@Override
	public BoardDTO upsert(BoardDTO request) {

		Board response = repo.save(new Board(request));
		log.debug("Board Saved Successfully.");
		return new BoardDTO(response);
	}

	@Override
	public List<BoardSummary> getBoardSummary() {
		final String emailId = SecurityContextHolder.getContext().getAuthentication().getName();
		List<Board> boards = repo.findByUserEmailId(emailId);
		return boards.stream().map(BoardSummary::new).collect(Collectors.toList());
	}

	@Override
	public BoardDTO getBoard(String boardId) {
		final Board board= repo.findById(boardId).orElse(null);
		if(board==null) {
			throw new EntityNotFoundException("Invalid Board ID");
		}
		return new BoardDTO(board);
	}

}
