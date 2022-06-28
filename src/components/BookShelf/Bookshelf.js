import React, { useContext, useEffect, useState } from 'react'
import add from '../../files/add.svg'
import Header from '../Header/Header'
import { UserContext } from '../context/UserContext'
import book from '../../files/book.svg'
import '../BookShelf/bookshelf.css'

export default function BookShelf ({baseUrl, userBooks}) {

  const {loggedIn}=useContext(UserContext)
  const[bookshelfFull,setBookshelfFull] = useState()
  const[filteredReaded, setFilteredReaded] = useState(false)
  const[readedBooks, setReadedBooks] = useState ()
  const[filteredToRead, setFilteredToRead] = useState(false)
  const[toReadBooks, setToReadBooks] = useState ()
  const[filteredReading, setFilteredReading] = useState(false)
  const[readingBooks, setReadingBooks] = useState ()
  const[unfiltered, setUnfiltered] = useState(true)



  
    useEffect(() => {
        userBooks === undefined || userBooks.length === 0 ? setBookshelfFull(false) : setBookshelfFull(true)
    },[userBooks]);
    

    const filterReaded = ()=>{
        const readedBooks = userBooks?.filter(item=>item.UserTag==="Read")
        setReadedBooks(readedBooks)
        setFilteredReaded(true)
        setFilteredReading(false)
        setFilteredToRead(false)
        setUnfiltered(false)
        var readedFilter = document.getElementById('read-books')
        readedFilter.classList.add('default')
        var allBooksRemove = document.getElementById('all-books')
        allBooksRemove.classList.remove('default')
        var toReadFilter = document.getElementById('toread-books')
        toReadFilter.classList.remove('default')
        var readingFilter = document.getElementById('reading-book')
        readingFilter.classList.remove('default')
    }

    const filterToRead = ()=>{
        const toReadBooks = userBooks?.filter(item=>item.UserTag==="To Read")
        setToReadBooks(toReadBooks)
        setFilteredToRead(true)
        setFilteredReading(false)
        setFilteredReaded(false)
        setUnfiltered(false)
        var toReadFilter = document.getElementById('toread-books')
        toReadFilter.classList.add('default')
        var allBooksRemove = document.getElementById('all-books')
        allBooksRemove.classList.remove('default')
        var readedFilter = document.getElementById('read-books')
        readedFilter.classList.remove('default')
        var readingFilter = document.getElementById('reading-book')
        readingFilter.classList.remove('default')
    }

    const filterReading = ()=>{
        const readingBooks = userBooks?.filter(item=>item.UserTag==="Reading")
        setReadingBooks(readingBooks)
        setFilteredReading(true)
        setFilteredToRead(false)
        setFilteredReaded(false)
        setUnfiltered(false)
        var readingFilter = document.getElementById('reading-book')
        readingFilter.classList.add('default')
        var allBooksRemove = document.getElementById('all-books')
        allBooksRemove.classList.remove('default')
        var toReadFilter = document.getElementById('toread-books')
        toReadFilter.classList.remove('default')
        var readedFilter = document.getElementById('read-books')
        readedFilter.classList.remove('default')
    }

    const allBooks = ()=>{
        setFilteredReading(false)
        setFilteredToRead(false)
        setFilteredReaded(false)
        setUnfiltered(true)
        var readingFilter = document.getElementById('reading-book')
        readingFilter.classList.remove('default')
        var allBooks = document.getElementById('all-books')
        allBooks.classList.add('default')
        var toReadFilter = document.getElementById('toread-books')
        toReadFilter.classList.remove('default')
        var readedFilter = document.getElementById('read-books')
        readedFilter.classList.remove('default')
    }

  return (
    <div>
        <Header baseUrl={baseUrl}/>
        <div className='bookshelf-container'>
            <div className='bookshelf-header-container'>
                <h1>My Bookshelf</h1>
                {bookshelfFull ?
                  <div className='bookshelf-filter'>
                    <button className='filter-switch default' id = 'all-books' onClick={()=>allBooks()}>All</button>
                    <button className='filter-switch' id = 'reading-book' onClick={()=>filterReading()}>Reading</button>
                    <button className='filter-switch' id = 'toread-books' onClick={()=>filterToRead()}>To Read</button>
                    <button className='filter-switch' id = 'read-books' onClick={()=>filterReaded()}>Read</button>
                  </div> 
                
                : null
                
                }
             
                <div className='bookself-add-book'>
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


            {bookshelfFull ? 

              <div className='bookshelf-content-full'>

              { filteredReaded ? 
                  bookshelfFull === false ? console.log("empty") : readedBooks?.map(item=>{
                      return (
                          <div key={item.Identifier} on>
                              <a className='book-card-link' href={`/bookdetail/book/${item.Identifier}`}>
                                <div className='book-card'>
                                    <div className='book-card-cover' >
                                      <img src={item.ImageUrl} className='book-card-image' alt='book-cover'></img>
                                    </div>
                                    <div className='book-card-tags'>
                                      {item.UserTag === 'Read'? <p className='readtag'>{item.UserTag}</p> : null}
                                      {item.UserTag === 'To Read'? <p className='toreadtag'>{item.UserTag}</p> : null}
                                      {item.UserTag === 'Reading'? <p className='readingtag'>{item.UserTag}</p> : null}
                                    </div>
                                    <div className='book-card-info'>
                                      <p className='book-card-title'>{item.BookTitle}</p>
                                    </div>
                                </div>
                           
                              </a>
                          </div>
                  
                      )
                  })
              : null
              }

              { filteredToRead ? 
                  bookshelfFull === false ? console.log("empty") : toReadBooks?.map(item=>{
                      return (
                          <div key={item.Identifier} className='book-card' on>
                              <a className='book-card-link' href={`/bookdetail/book/${item.Identifier}`}>
                                  <img src={item.ImageUrl} className='book-card-image' alt='book-cover'></img>
                                  {item.UserTag === 'Read'? <p className='readtag'>{item.UserTag}</p> : null}
                                  {item.UserTag === 'To Read'? <p className='toreadtag'>{item.UserTag}</p> : null}
                                  {item.UserTag === 'Reading'? <p className='readingtag'>{item.UserTag}</p> : null}
                                  <p className='book-card-title'>{item.BookTitle}</p>
                              </a>
                          </div>
                  
                      )
                  })
              : null

              }

              { filteredReading ? 
                  bookshelfFull === false ? console.log("empty") : readingBooks?.map(item=>{
                      return (
                          <div key={item.Identifier} className='book-card' on>
                              <a className='book-card-link' href={`/bookdetail/book/${item.Identifier}`}>
                                  <img src={item.ImageUrl} className='book-card-image' alt='book-cover'></img>
                                  {item.UserTag === 'Read'? <p className='readtag'>{item.UserTag}</p> : null}
                                  {item.UserTag === 'To Read'? <p className='toreadtag'>{item.UserTag}</p> : null}
                                  {item.UserTag === 'Reading'? <p className='readingtag'>{item.UserTag}</p> : null}
                                  <p className='book-card-title'>{item.BookTitle}</p>
                              </a>
                          </div>
                  
                      )
                  })
              : null

              }

              { unfiltered ? 
                  bookshelfFull === false ? console.log("empty") : userBooks?.map(item=>{
                      return (
                          <div key={item.Identifier} className='book-card' on>
                              <a className='book-card-link' href={`/bookdetail/book/${item.Identifier}`}>
                                  <img src={item.ImageUrl} className='book-card-image' alt='book-cover'></img>
                                  {item.UserTag === 'Read'? <p className='readtag'>{item.UserTag}</p> : null}
                                  {item.UserTag === 'To Read'? <p className='toreadtag'>{item.UserTag}</p> : null}
                                  {item.UserTag === 'Reading'? <p className='readingtag'>{item.UserTag}</p> : null}
                                  <p className='book-card-title'>{item.BookTitle}</p>
                              </a>
                          </div>
                  
                      )
                  })

              : null

              }
              </div>

                
              : 

              <div className='bookshelf-content-empty'>
                <img className='bookshelf-icon' src={book} alt='book-shelf-icon'></img>
                <h3>Your bookshelf is empty</h3>
                {
                  loggedIn ?
                  <p className='empty'>Add your first book and start building your bookshelf.</p>

                  : <p className='empty'>Log in and start building your bookshelf.</p>
                }
              </div>
            
            }
                
        </div> 
    </div>


  )
}
