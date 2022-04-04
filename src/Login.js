import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./Header";
import Footer from './components/Footer/Footer';
import './Login.css';

function Login() {

  // set state for username and password
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

// get username and password from local storage
  var name = localStorage.getItem('UserName')
  var pass = localStorage.getItem('UserPass')

  // login button
  function login (event)  {
    let newuser = username;
    let userpassword = password;
    localStorage.setItem('UserName', newuser);
    localStorage.setItem('UserPass', userpassword);
    var name = localStorage.getItem('UserName')
    if(name!== "" && pass!== "")
    {
       window.location('/navbar')
    }
    else {
       window.location('/')
    }
  };

  return (
    <>
    {
      name?<Dashboard />:
      <Container fluid className='div'>
        <Header />
        <div className='login-parent'>
              <div className='login-div'>
                <div className='login-text'>
                  <h2>User Login</h2>
                </div>
                <div className='login-form'>
                  <form onSubmit={login}>
                      <div className="form-group">
                          <label>User Name</label>
                          <input type="email" className="form-control"
                          value={username}
                          onChange={(e)=>setUserName(e.target.value)} 
                          placeholder="Enter email" />
                      </div>

                      <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)} 
                          placeholder="Enter password" />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block log-btn" >Login</button>
                  </form>
                </div>
              </div>
        </div>
        <Footer /> 
      </Container> }
    </>
  )
}

export default Login;