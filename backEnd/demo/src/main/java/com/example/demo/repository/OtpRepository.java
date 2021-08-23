package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Otp;

@Repository
public interface OtpRepository extends JpaRepository<Otp, String>{

}
