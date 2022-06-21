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

          <div className='header-user'>
            {
              loggedIn ?
              
              <div className='header-entry'>
                <p>{user.username}</p>
                <button className = 'header-login' onClick={handleLogout}>Log out</button>
              </div>
        
              : 
              <div>
                <button className = 'header-login' onClick={()=>setModal(!modal)}>Log in</button>
              </div>
              
            }

          </div>
          
      </div>
    
      
        
        {
          modal ?
          <div className='entry-modal'>
            <div className='entry-modal-content'>
              <div className='entry-modal-close' onClick={()=>{setModal(false)}}>&times;</div> 

              {
                userExists ?
                <div className='entry-form-elements'>
                  <h1>Log in</h1>
                  <p className='entry-form-info'>Log in first, to start addding books to your bookshelf</p>
                  <form className='entry-form' onSubmit={handleLogin}>
                    <div className='entry-form-input'>
                      <label className='entry-form-label'>Username</label>
                      <input className='entry-form-credentials' type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className='entry-form-input'>
                      <label className='entry-form-label'>Password</label>
                      <input className='entry-form-credentials' type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button className='entry-form-submit' type="submit">Log in</button>
                  </form>
                  <p>If you already have and account, please <span className='entry-switch' onClick={()=>{setUserExists(false)}}>sign up.</span></p>
                  {message !== '' ? <p>{message}</p> : null}
                </div>
                
                : 
                <div className='entry-form-elements'> 
                  <h1>Sign Up</h1>
                  <p className='entry-form-info'>Log in first, to start addding books to your bookshelf</p>
                  <form className='entry-form' onSubmit={handleSignup}>
                    <div className='entry-form-input'>
                      <label className='entry-form-label'>Username</label>
                      <input className='entry-form-credentials' type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className='entry-form-input'>
                      <label className='entry-form-label'>Password</label>
                      <input className='entry-form-credentials' type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>             
                    <button className='entry-form-submit' type="submit">Sign up</button>
                  </form>
                  {
                    signupSuccess ? <p style={{"color":"green"}}>Signed up successfully. <span onClick={()=>{setUserExists(true)}}>Login</span></p>
                    : <p>Already have an account? <span className='entry-switch' onClick={()=>{setUserExists(true)}}>Login</span></p>
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


