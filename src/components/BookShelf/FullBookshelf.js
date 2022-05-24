import React, {useState, useEffect} from 'react'

export default function FullBookshelf() {

    const[savedBooks,setSavedBooks] = useState()
    const[bookshelfFull,setBookshelfFull] = useState()

  
    useEffect(() => {
        let bookShelf = window.localStorage.getItem('bookShelf') 
        setSavedBooks(JSON.parse(bookShelf))
        savedBooks !== null ? setBookshelfFull(true) : setBookshelfFull(false)
        console.log({savedBooks})
        console.log({bookshelfFull})
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);


  return (
    <div className='full-bookshelf-container'>
        {bookshelfFull === false ? console.log("empty") : savedBooks?.map(item=>{
            return (
                <div key={item.id} className='book-card' on>
                    <a className='book-card-link' href={`/bookdetail/book/${item.id}`}>
                        <img src={item.imgUrl} className='book-card-image' alt='book-cover'></img>
                        {item.tag === 'Read'? <p className='readtag'>{item.tag}</p> : console.log('mnau')}
                        {item.tag === 'To Read'? <p className='toreadtag'>{item.tag}</p> : console.log('mnau')}
                        {item.tag === 'Reading'? <p className='readingtag'>{item.tag}</p> : console.log('mnau')}
                        <p className='book-card-title'>{item.title}</p>
                    </a>
                </div>
          
            )
        })}

    </div>
  )
}




