import React, {useContext, useState} from 'react'
import axios from 'axios';
import logo from '../../files/logo.svg'
import {Link} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './header.css'

export default function Header ({baseUrl}) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [modal,setModal]=useState(false)
  const [userExists,setUserExists]=useState(true)
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage]=useState('')
  const [signupSuccess,setSignupSuccess]=useState(false)
  const {user,setUser}=useContext(UserContext)


  const handleSignup =(e)=>{
    e.preventDefault()
    axios.post(`${baseUrl}/users/register`,{
      username, password
    })
    .then(res=>{
      setSignupSuccess(true)
      console.log(res.data)
    })
    .catch(err=>console.log(err))

  }

  const handleLogin=(e)=>{
    e.preventDefault()
    axios.post(`${baseUrl}/users/login`,{
      username, password
    })
    .then(res=>{
      setUser(res.data)
      setLoggedIn(true)
      setModal(false)
    })
    .catch(err=>console.log(err))
  }

  const handleLogout=()=>{
    setUser({})
    setLoggedIn(false)
    setSignupSuccess(false)
  }


  return (
    <div>
      <div className='header-container '>
        <a className='logo' href='/'><img src={logo} alt='logo'></img></a>
          {
            loggedIn ?
            
            <div className='header-user'>
              <p>{user.username}</p>
              <button className = 'header-login' onClick={handleLogout}>Logout</button>
            </div>
      
            : 
            <div className='header-user'>
              <button className = 'header-login' onClick={()=>setModal(!modal)}>Log in</button>
            </div>
            
          }
      </div>
    
      
        
        {
          modal ?
          <div className='modal'>
            <div className='modal-content'>
              <div className='modal-close' onClick={()=>{setModal(false)}}>&times;</div> 

              {
                userExists ?
                <div className='modal-login'>
                  <h1 className='log-in-header'>Log in</h1>
                  <p className='log-in-info'>Log in first to start addding books to your bookshelf</p>
                  <form className='modal-form' onSubmit={handleLogin}>
                    <div className='modal-form-input'>
                      <label>Username</label>
                      <input className='form-input' type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className='modal-form-input'>
                      <label>Password</label>
                      <input className='form-input' type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button className='login-btn' type="submit">Log in</button>
                  </form>
                  <p>If you already have and account, please <span className='modal-signup-switch' onClick={()=>{setUserExists(false)}}>sign up.</span></p>
                  {message !== '' ? <p>{message}</p> : null}
                </div>
                
                : 
                <div className='modal-signup'> 
                  <h2>Sign Up</h2>
                  <form className='modal-form' onSubmit={handleSignup}>
                    <input type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>                    
                    <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className='login-btn' type="submit">Sign up</button>
                  </form>
                  {
                    signupSuccess ? <p style={{"color":"green"}}>Signed up successfully. <span onClick={()=>{setUserExists(true)}}>Login</span></p>
                    : <p>Already have an account? <span onClick={()=>{setUserExists(true)}}>Login</span></p>
                  }
                  
                </div>

              }
            </div>
          </div>

          : null
            
        }

    </div>

  )
}


