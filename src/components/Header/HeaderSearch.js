import React, {useContext} from 'react'
import logo from '../../files/logo.svg'
import back from '../../files/back.svg'
import { UserContext } from '../context/UserContext'

export default function HeaderSearch () {

  const {user}=useContext(UserContext)



  return (
    <div className='header-search-container '>
        <a className='back-btn' href='/'><img src={back} alt='back'></img></a>
        <a className='logo' href='/'><img src={logo} alt='logo'></img></a>
        <p className='header-user'>{user.username}</p>
    </div>
  )
}