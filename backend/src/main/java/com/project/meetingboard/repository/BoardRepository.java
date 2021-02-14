package com.project.meetingboard.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.project.meetingboard.model.Board;

@Repository
public interface BoardRepository extends MongoRepository<Board, String>{

	public List<Board> findByUserEmailIdAndIsActive(String emailId,boolean isActive);
}
