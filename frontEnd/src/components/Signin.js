import React from 'react';
import { Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';
import Button from './Button'
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useHistory } from 'react-router-dom'
import Footer from './Footer';

const Signin =() =>{
    const history = useHistory();
    var flag=0;
    var date=new Date();
    var time= date.getTime();
    console.log('Sign In called')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const redirectOtpLogin=()=>{
      let path='/OtpLogin';
      history.push(path);
    }
    const redirectLanding =()=>{
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };
      var email=document.getElementById('email');
      var pass=document.getElementById('pass');
      
      
      const patient_REST_API_URL="http://localhost:8080/api/v1/patients/"+email.value;
        axios.get(patient_REST_API_URL,config).then(function (response) {
          console.log(response.data);
          if(response.data.password==pass.value){
                    pass.value=""
                    email.value=""
                    let path='/Landing';
                    const data=response.data;
                    history.push({
                      pathname: path,
                      state: { detail: response.data }
                    });
          }
          else{
            pass.value=""
            email.value=""
            flag=2;
            axios.get(patient_REST_API_URL+'/invalidPassword',config).then(function(response){
              if(response.data.allowed>=0){
                alert('Password is incorrect');
              }
            });
            axios.get(patient_REST_API_URL,config).then(function(response){
              if(response.data.email==null){
                alert("Your account has been locked");
              }
            });
          }
        //return response.data;
        }).catch(function (error) {
              flag=3;
              alert('Account does not exist');
        });
    }
    
    return(
      
        <div className="app flex-row align-items-center">
            <header className="header" >
              <h1 className='modalContainer' >
                  SignIn 
              </h1>
              <h2 className='modalContainer'>
                    <a href = '/'>
                        healthi.in
                    </a>
              </h2>
            </header>

            <Container>
                        <Row style={{marginTop: 10 ,justifyContent:'center' }}>
                          <Col xs="6">                      
                            <label color="primary" className="px-4">
                                Email Id
                             </label>
                             <input  id="email"  type='email' required onChange={handleEmailChange} className="input-field-background form-control" />
                          </Col>
                        </Row>
                      
                        <Row style={{marginTop: 10,justifyContent:'center'}}>
                          <Col xs="6">                      
                            <label color="primary" className="px-4">
                                Password
                             </label>
                             <input id="pass" type='password' required onChange={handlePasswordChange} className="input-field-background form-control"/>
                          </Col>
                        </Row>
                        
                        <Row style={{marginTop: 10,justifyContent:'center'}}>
                          <Col xs="6">                      
                            <Button color="lightblue" text="Login" onClick={redirectLanding} disabled={!email || !password}/>
                    
                          </Col>
                        </Row>
                        <Row style={{marginTop: 10,justifyContent:'center'}}>
                          <Col xs="6">                      
                            <Button color="lightblue" text="Login with Otp" onClick={redirectOtpLogin}/>
                                
                          </Col>
                        </Row>
                        
            </Container>
            <Footer/>
          </div>
    )
}
export default Signin