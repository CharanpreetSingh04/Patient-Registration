import React from 'react'
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import Footer from './Footer';
import Button from './Button';
import {Card,Button as Button_} from 'react-bootstrap';
import { Container } from 'reactstrap';

const Landing = () => {
                const location = useLocation();
                const history=useHistory();
                const callSigin=()=>{
                    let path='/';
                    history.push(path);
                }
                return(
                    <div >
                      <header className="header">
                          <h2 className='modalContainer'>Hi, {" "+location.state.detail.firstName + " " + location.state.detail.lastName} </h2>
                          <Button color='lightblue' text='Logout' onClick={callSigin}/>
                      </header>
                      <Container>
                          <table className="table table-striped table-bordered">
                              <thead>
                                  <tr>
                                      <th style={{fontWeight: 'bold'}}>First Name</th>
                                      <th style={{fontWeight: 'bold'}}>Last Name</th>
                                      <th style={{fontWeight: 'bold'}}>Blood Group</th>
                                      <th style={{fontWeight: 'bold'}}>Email id</th>
                                      <th style={{fontWeight: 'bold'}}>phone Number</th>
                                  </tr>
                              </thead>
                              <tbody>
                                          <tr>
                                                <td>{location.state.detail.firstName}</td>
                                                <td>{location.state.detail.lastName}</td>  
                                                <td>{location.state.detail.bloodGroup}</td>
                                                <td>{location.state.detail.email}</td>   
                                                <td>{location.state.detail.phone}</td> 
                                          </tr>
                              </tbody>
                          </table>
                          <div style={{justifyContent: 'center', paddingLeft: '40%',marginTop: 30, maxWidth: '100%'}}>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Orders</Card.Title>
                                        <Card.Text>
                                            You can check your transaction history with us.
                                        </Card.Text>
                                        <Button_ variant="primary">My orders</Button_>
                                    </Card.Body>
                            </Card>
                          </div>
                          
                      </Container>
                      
                      <Footer/>
                  </div>
                )
        
}

export default Landing
