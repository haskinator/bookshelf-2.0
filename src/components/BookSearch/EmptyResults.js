import React from 'react'
import search from '../../files/search.svg'

export default function EmptyResults () {
  return (
    <div className='search-container'>
        <div className='results-container'>
            <img className='search-icon' src={search} alt='search-icon'></img>
            <h3>Find your book</h3>
            <p className='empty'>Search for the book you want to add to your bookshelf</p>
        </div>
    </div>
  )
}
