package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="LockCheck")
public class LockCheck {
	@Id
	@Column(name = "email")
	private String email;
	
	@Column(name= "allowed")
	private int wrong_time_allowed;
	public LockCheck() {}
	public LockCheck(String email, int wrong_time_allowed) {
		super();
		this.email = email;
		this.wrong_time_allowed = wrong_time_allowed;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getWrong_time_allowed() {
		return wrong_time_allowed;
	}

	public void setWrong_time_allowed(int wrong_time_allowed) {
		this.wrong_time_allowed = wrong_time_allowed;
	}
	
	
}
