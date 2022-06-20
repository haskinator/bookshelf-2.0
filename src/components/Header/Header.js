import React, {useContext, useState} from 'react'
import axios from 'axios';
import logo from '../../files/logo.svg'
import {Link} from 'react-router-dom';
import { UserContext } from '../context/UserContext';

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
    <div className='header-container'>
        <a className='logo' href='/'><img src={logo} alt='logo'></img></a>
        {
          loggedIn ?
          <div>
            <p>Welcome {user.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
     
          : 
          <div>
            <button onClick={()=>setModal(!modal)}>Log in</button>
          </div>
          
        }

        {
          modal ?
          <div>
            <h3 onClick={()=>{setModal(false)}}>x</h3>

            {
              userExists ?
              <div>
                <h2>Log in</h2>
                <form onSubmit={handleLogin}>
                  <input type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                  <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                  <button className='login-btn' type="submit" >Submit</button>
                </form>
                <p>Don't have an account? <span onClick={()=>{setUserExists(false)}}>Sign up</span></p>
                {message !== '' ? <p>{message}</p> : null}
              </div>
              
              : 
              <div> 
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                  <input type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                  <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                  <button className='login-btn' type="submit">Submit</button>
                </form>
                {
                  signupSuccess ? <p style={{"color":"green"}}>Signed up successfully. <span onClick={()=>{setUserExists(true)}}>Login</span></p>
                  : <p>Already have an account? <span onClick={()=>{setUserExists(true)}}>Login</span></p>
                }
                
              </div>
            
            }

          </div>

          : null

        }
    </div>
  )
}


