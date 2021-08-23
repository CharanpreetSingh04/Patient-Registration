package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.LockCheck;

public interface LockCheckRepository extends JpaRepository<LockCheck,String> {

}
