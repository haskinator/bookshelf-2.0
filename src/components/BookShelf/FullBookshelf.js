import React, {useState, useEffect} from 'react'

export default function FullBookshelf({userBooks}) {

    const[bookshelfFull,setBookshelfFull] = useState()


  
    useEffect(() => {
        userBooks ? setBookshelfFull(true) : setBookshelfFull(false)
    },[]);
    

  return (
    <div className='full-bookshelf-container'>
        {bookshelfFull === false ? console.log("empty") : userBooks?.map(item=>{
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
        })}

    </div>
  )
}




