import React, {useState} from 'react'
import logo from '../../files/logo.svg'
import {Link} from 'react-router-dom';

export default function Header () {
  const [loggedIn, setLoggedIn] = useState(false)
  const [modal,setModal]=useState(false)
  const [userExists,setUserExists]=useState(true)
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage]=useState('')
  const [signupSuccess,setSignupSuccess]=useState(false)




  return (
    <div className='header-container'>
        <a className='logo' href='/'><img src={logo} alt='logo'></img></a>
        {
          loggedIn ?
          <div>
            <p>ahoj Haskipes</p>
            <button>Logout</button>
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
                <form>
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
                <form>
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


