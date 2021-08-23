package com.example.demo.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LockCheck;
import com.example.demo.model.Otp;
import com.example.demo.model.Patient;
import com.example.demo.repository.LockCheckRepository;
import com.example.demo.repository.OtpRepository;
import com.example.demo.repository.PatientRepository;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PatientController {
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private OtpRepository otpRepository;
	
	@Autowired
	private LockCheckRepository lockCheckRepository;
	
	@GetMapping("/patients")
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}
	
	@GetMapping("/otp")
	public Otp getOTP(){
		List<Otp> otps=otpRepository.findAll();
		Random r=new Random();        
      	int randomNumber=r.nextInt(otps.size());
		return otps.get(randomNumber);
	}
	
	@GetMapping("/patients/{email}")
	public Patient getPatient(@PathVariable String email) {
		List<LockCheck> lockCheck=lockCheckRepository.findAll();
		int allowed_old=lockCheck.stream().filter(t->t.getEmail().equals(email)).findFirst().get().getWrong_time_allowed();
		if(allowed_old>0) {
			List<Patient> patients=patientRepository.findAll();
			return patients.stream().filter(t -> t.getEmail().equals(email)).findFirst().get();
		}
		else {
			return new Patient();
		}
	}
	@GetMapping("/patients/{email}/invalidPassword")
	public int putLockCheck(@PathVariable String email) {
		List<LockCheck> lockCheck=lockCheckRepository.findAll();
		int allowed_old=lockCheck.stream().filter(t->t.getEmail().equals(email)).findFirst().get().getWrong_time_allowed();
		int allowed_new=allowed_old-1;
		lockCheckRepository.save(new LockCheck(email,allowed_new));
		return lockCheck.stream().filter(t->t.getEmail().equals(email)).findFirst().get().getWrong_time_allowed();

	}
	@PostMapping("/patients")
	public void addPatient(@RequestBody Patient patient) {
		patientRepository.save(patient);
		lockCheckRepository.save(new LockCheck(patient.getEmail(),3));
	}
	
}
