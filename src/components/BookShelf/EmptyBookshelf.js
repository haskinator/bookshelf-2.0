import React from 'react'
import book from '../../files/book.svg'


export default function EmptyBookshelf() {
  return (
    <div className='books-container'>
        <img className='bookshelf-icon' src={book} alt='book-shelf-icon'></img>
        <h3>Your bookshelf is empty</h3>
        <p className='empty'>Add your first book and start building your bookshelf</p>
    </div>
   
  )
}
