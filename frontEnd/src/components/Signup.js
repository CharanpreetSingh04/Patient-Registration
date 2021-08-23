import axios from 'axios';
import Button from './Button';
import React,{useState} from 'react'
import { useHistory } from 'react-router';
import './footer_signup.css'
import { Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';
const patients_REST_API_URL="http://localhost:8080/api/v1/patients";

const Signup =() => {
    const history=useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [blood, setBlood] = useState("");
    const [phone, setPhone] = useState("");
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };

    const handlePassword = (event) => {
      setPassword(event.target.value);
    };
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleBlood = (event) => {
        setBlood(event.target.value);
    };
    const handlePhone = (event) => {
        setPhone(event.target.value);
    };
    const register=()=>{
      
      console.log("link to /patients by post method");
      var first=document.getElementById('firstName');
      var last=document.getElementById('lastName');
      var blood=document.getElementById('bloodGroup');
      var email=document.getElementById('email');
      var pass=document.getElementById('password');
      var confirm=document.getElementById('confirmPassword');
      var phone=document.getElementById('phone');
      /*const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(String(email).toLowerCase())){
        alert('email should be in correct format')
        return;
      }*/
      if(first.value==""||blood.value==""||pass.value==""||confirm.value==""||email.value==""||phone==""){
        alert('Can not leave any field empty other than last name');
        return;
      }
      if(confirm.value!==pass.value){
        alert('Passwords donot match');
        return;
      }
      
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };
      const article={
        firstName: first.value,
        lastName: last.value,
        bloodGroup: blood.value,
        email: email.value,
        password: pass.value,
        phone: phone.value
      };
      first.value="";
      last.value="";
      blood.value="";
      email.value="";
      pass.value="";
      confirm.value="";
      phone.value="";
      axios.get(patients_REST_API_URL+'/'+article.email,config).then(function (response,error) {
        if(!error){
          alert('User already registered with this email id');
          return;
        }
      }).catch(function (error) {
        if (error.response) {
          alert('User Registered');
          axios.post(patients_REST_API_URL,article,config);
          let path='/Signin';
          history.push(path);
        }
      });
    }
    console.log('Sign Up called')
    return (

        <div className="app flex-row align-items-center">
            <header className="header" >
                <h1 className='modalContainer' >
                  SignUp
                </h1>
                <h2 className='modalContainer' >
                    <a href='/'>
                        healthi.in
                    </a>
                </h2>
            </header>
            <Container style={{alignContent: 'center'}} >
                        <Row style={{justifyContent:'center'}}>
                        <Col xs="6">                      
                            <label color="primary" className="px-4" >
                                First Name
                             </label>
                             <input  type='text' id="firstName" required onChange={handleFirstName} className="input-field-background form-control"/>
                          </Col>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                        <Col xs="6">                      
                            <label color="primary" className="px-4" >
                                Last Name
                             </label>
                             <input  type='text' id="lastName" required onChange={handleLastName} className="input-field-background form-control"/>
                          </Col>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                        <Col xs="6">                      
                            <label color="primary" className="px-4" >
                                Blood Group
                             </label>
                             <input  type='text' id="bloodGroup" required onChange={handleBlood} className="input-field-background form-control"/>
                          </Col>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                        <Col xs="6">                      
                            <label color="primary" className="px-4" >
                                Email
                             </label>
                             <input  type='email' id="email" required onChange={handleEmail} className="input-field-background form-control"/>
                          </Col>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                        <Col xs="6">                      
                            <label color="primary" className="px-4" >
                                Phone Number
                             </label>
                             <input  type='tel' id="phone" required onChange={handlePhone} className="input-field-background form-control"/>
                          </Col>
                        </Row>

                        <Row style={{justifyContent:'center'}}>
                        <Col xs="6">                      
                            <label color="primary" className="px-4" >
                                Password
                             </label>
                             <input  type='password' id="password" required onChange={handlePassword} className="input-field-background form-control"/>
                          </Col>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                        <Col xs="6">                      
                            <label color="primary" className="px-4" >
                                Confirm Password
                             </label>
                             <input type='password' id="confirmPassword" required className="input-field-background form-control"/>
                          </Col>
                        </Row>
                        <Row style={{justifyContent:'center'}}>
                          <Col xs="6">                      
                            <Button color="lightblue" text="Register" disabled={(!email||!password||!firstName||!lastName||!blood||!phone)&&true} onClick={register}/>
                          </Col>
                        </Row>
            </Container>
            <div>            
                <footer className="Footer_home">Copyright © 2019. Svasth Life Pvt Ltd. All rights reserved</footer>
            </div>
        </div>
    );
}
export default Signup