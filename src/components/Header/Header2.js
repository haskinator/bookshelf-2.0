import React from 'react'
import logo from '../../files/logo.svg'
import back from '../../files/back.svg'

export default function Header2 () {
  return (
    <div className='header2-container'>
        <a className='back-btn' href='/'><img src={back} alt='back'></img></a>
        <a className='logo' href='/'><img src={logo} alt='logo'></img></a>
        <img className='avatar-container' src='https://i.pravatar.cc/300' alt='avatar'></img>
    </div>
  )
}