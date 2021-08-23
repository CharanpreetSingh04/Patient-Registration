import React from 'react'
import Button from './Button'
import { useHistory } from "react-router-dom";
import Footer from './Footer';
const Header = () => {
    const history = useHistory();

    const callSigin =()=>{
      let path = '/Signin'; 
      history.push(path);
    }
    const callSignup =()=>{
      let path = '/Signup'; 
      history.push(path);
    }
    return (
      <div>
        <header className='header' >
            <h1 className='modalContainer' >
                Patient Portal
            </h1>
            <Button color='lightblue' text='Sign In' disabled={false} onClick={callSigin}/>
              
            <Button color='lightblue' text='Sign Up' disabled={false} onClick={callSignup}/>
            <h2 className='modalContainer'>
                healthi.in
            </h2>
        </header>
        <div className='container'>
          <h2>Welcome to <span style={{color: 'orange'}}>healthi.in</span></h2>
          <div className="card">
              <h4 style={{fontStyle: 'italic'}}>
                Healthi provides many services to you. Vaccination for you and your family can be done. Other than that you can have health check up appointment with doctor and get full health report.
              </h4>
              <br/>
              <h4 style={{fontStyle: 'italic'}}>
                You don't have to worry. Healthi does that for you.
              </h4>
          </div>
        </div>
        <Footer/>
        
      </div>
    )
}
//Component

export default Header
