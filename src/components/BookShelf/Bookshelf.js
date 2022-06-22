import React, { useContext } from 'react'
import add from '../../files/add.svg'
import EmptyBookshelf from './EmptyBookshelf'
import FullBookshelf from './FullBookshelf'
import Header from '../Header/Header'
import { UserContext } from '../context/UserContext'

export default function BookShelf ({baseUrl, userBooks}) {

  const {loggedIn}=useContext(UserContext)


  console.log(userBooks)

  return (
    <div >
        <Header baseUrl={baseUrl}/>
        <div className='bookshelf-container'>
            <div className='bookshelf-header-container'>
                <h1>My Bookshelf</h1>
                <div>
                  {
                    loggedIn ?
                      <a href='/search' className='add-btn'>
                        <img className='add-icon' src={add} alt='add-icon'></img>
                        <span>Add book</span>
                      </a>

                    : null

                  }
                  
                  
                </div>     
            </div> 
            {userBooks === undefined || userBooks.length === 0 ? <EmptyBookshelf/> : <FullBookshelf userBooks={userBooks}/>  } 
        </div>
          
    </div>
  )
}
