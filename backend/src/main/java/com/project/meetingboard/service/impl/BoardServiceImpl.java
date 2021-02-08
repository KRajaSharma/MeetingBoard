package com.project.meetingboard.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.project.meetingboard.dto.BoardDTO;
import com.project.meetingboard.dto.ResponseDTO;
import com.project.meetingboard.model.Board;
import com.project.meetingboard.repository.BoardRepository;
import com.project.meetingboard.service.BoardService;

@Component
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardRepository repo;
	
	@Override
	public ResponseDTO upsert(BoardDTO request) {
		
		repo.save(new Board(request));
		return new ResponseDTO("Board Saved Successfully.");
	}

}
