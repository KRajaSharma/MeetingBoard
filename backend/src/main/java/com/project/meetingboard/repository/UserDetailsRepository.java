package com.project.meetingboard.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.meetingboard.model.UserDetails;

public interface UserDetailsRepository extends MongoRepository<UserDetails, String> {

}
