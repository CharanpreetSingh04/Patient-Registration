import React from 'react';
import Footer from './Footer';
import { Col, Container, Row } from 'reactstrap';
import Button from './Button'
import axios from 'axios';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Timer from './Timer';
const OtpLogin = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const history=useHistory();
    const [errorMessage,setErrorMessage]=useState('');
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otp_sent, setOtpSent] = useState("");

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };
    const requestOtp=()=>{
        setOtpSent('Sent');
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        var otp=document.getElementById('otp');
        var login=document.getElementById('Login');
        login.addEventListener("click", redirectLanding);
        const patient_REST_API_URL="http://localhost:8080/api/v1/otp";
        axios.get(patient_REST_API_URL,config).then(function(response){
            otp.value=response.data.otp;
            setOtp(otp.value);
            setOtpSent('');
            login.disabled=false;
        });
    }

    const redirectLanding=()=>{
          const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
          var email=document.getElementById('email');
          var otp=document.getElementById('otp');
          const patient_REST_API_URL="http://localhost:8080/api/v1/patients/"+email.value;
          axios.get(patient_REST_API_URL,config).then(function (response) {
              if(response.data.email==null){
                  setErrorMessage('Account is Locked');
                  return;
              }
              otp.value=""
              email.value=""
              let path='/Landing';
              history.push({
                pathname: path,
                state: { detail: response.data }
              });
            }).catch(function (error) {
                  setErrorMessage('Account does not exist');
            });
    }
    return (
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
                            <label style={{fontWeight: 'bold'}} color="primary" className="px-4">
                                Email Id
                             </label>
                             <input  id="email"  type='email' required onChange={handleEmailChange} className="input-field-background form-control" />
                             {!email && (
                                <p style={{color: 'red',fontSize: 12}} className="error"> {"*Required"} </p>
                             )}
                             {!re.test(String(email).toLowerCase()) && (
                                <p style={{color: 'red',fontSize: 12}} className="error"> {"*Should in correct format"} </p>
                             )}
                          </Col>
                        </Row>
                      
                        <Row style={{marginTop: 10,justifyContent:'center'}}>
                          <Col xs="6">                      
                            <label style={{fontWeight: 'bold'}} color="primary" className="px-4">
                                Otp
                             </label>
                             <input id="otp" type='text' required onChange={handleOtpChange} disabled={!email} className="input-field-background form-control"/>
                             {!otp && (
                                <p style={{color: 'red',fontSize: 12}} className="error"> {"*Required"} </p>
                             )}
                          </Col>
                        </Row>
                        
                        <Row style={{marginTop: 10,justifyContent:'center'}}>
                          <Col xs="6">                      
                            <Button color="lightblue" text="Send Otp" onClick={requestOtp}  disabled={!email} />
                            {
                              otp_sent&&<Timer />
                            }
                          </Col>
                        </Row>
                        <Row style={{marginTop: 10,justifyContent:'center'}}>
                          <Col xs="6">                      
                            <Button color="lightblue" text="Login" id="Login" onClick={redirectLanding} disabled={!email || !otp}/>
                    
                          </Col>
                        </Row>
                        {errorMessage && (<Row style={{justifyContent: 'center'}}>
                          <Col xs="6" style={{color: 'red',fontSize: 20}} className="error"> {'*'+errorMessage} </Col></Row>
                        )}
            </Container>
            <Footer/>
          </div>
    )
}

export default OtpLogin
