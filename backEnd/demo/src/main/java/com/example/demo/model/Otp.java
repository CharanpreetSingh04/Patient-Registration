package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="otp")
public class Otp {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String otp;
	public Otp() {}
	public Otp(String otp) {
		super();
		this.otp = otp;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}
	
}
