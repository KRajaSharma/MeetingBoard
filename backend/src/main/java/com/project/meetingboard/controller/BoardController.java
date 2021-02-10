package com.project.meetingboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.meetingboard.dto.BoardDTO;
import com.project.meetingboard.dto.BoardSummary;
import com.project.meetingboard.dto.ResponseDTO;
import com.project.meetingboard.service.BoardService;
import com.sun.mail.iap.Response;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping(path = "v1/board")
public class BoardController {

	@Autowired
	private BoardService boardService;

	@PutMapping
	public ResponseEntity<BoardDTO> upsert(@RequestBody BoardDTO request) {
		log.debug("Board Upsert Controller Invoked");
		BoardDTO response = boardService.upsert(request);
		return ResponseEntity.ok(response);
	}

	@GetMapping("_summary")
	public ResponseEntity<List<BoardSummary>> getBoardSummary() {
		log.info("Board Summary Controller Invoked");
		List<BoardSummary> response = boardService.getBoardSummary();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<BoardDTO> getBoard(@PathVariable String id){
		log.debug("Get Board Controller Invoked");
		BoardDTO response = boardService.getBoard(id);
		return ResponseEntity.ok(response);
	}
	
}
