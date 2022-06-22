import React, {useContext} from 'react'
import book from '../../files/book.svg'
import { UserContext } from '../context/UserContext'


export default function EmptyBookshelf() {

  const {loggedIn}=useContext(UserContext)

  return (
    <div className='books-container'>
        <img className='bookshelf-icon' src={book} alt='book-shelf-icon'></img>
        <h3>Your bookshelf is empty</h3>
        {
          loggedIn ?
          <p className='empty'>Add your first book and start building your bookshelf.</p>

          : <p className='empty'>Log in first and start building your bookshelf.</p>
        }
    
    </div>
   
  )
}
