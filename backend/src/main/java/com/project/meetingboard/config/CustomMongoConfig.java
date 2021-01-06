package com.project.meetingboard.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

@Configuration
public class CustomMongoConfig extends AbstractMongoClientConfiguration{

	@Override
	protected String getDatabaseName() {
		return "meetingboard";
	}
 
	@Override
	public boolean autoIndexCreation() {
		return true;
	}
}
