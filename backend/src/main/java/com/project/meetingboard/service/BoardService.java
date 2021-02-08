package com.project.meetingboard.service;

import com.project.meetingboard.dto.BoardDTO;
import com.project.meetingboard.dto.ResponseDTO;

public interface BoardService {

	public ResponseDTO upsert(BoardDTO request);
}
