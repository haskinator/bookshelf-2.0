import React from 'react'
import logo from '../../files/logo.svg'

export default function Header () {
  return (
    <div className='header-container'>
        <a className='logo' href='/'><img src={logo} alt='logo'></img></a>
        <img className='avatar-container' src='https://i.pravatar.cc/300' alt='avatar'></img>
    </div>
  )
}


