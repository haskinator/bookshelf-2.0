import React, {useState, useEffect} from 'react'

export default function FullBookshelf({userBooks}) {

    const[bookshelfFull,setBookshelfFull] = useState()
    const[filteredReaded, setFilteredReaded] = useState(false)
    const[readedBooks, setReadedBooks] = useState ()
    const[filteredToRead, setFilteredToRead] = useState(false)
    const[toReadBooks, setToReadBooks] = useState ()
    const[filteredReading, setFilteredReading] = useState(false)
    const[readingBooks, setReadingBooks] = useState ()
    const[unfiltered, setUnfiltered] = useState(true)



  
    useEffect(() => {
        userBooks ? setBookshelfFull(true) : setBookshelfFull(false)
    },[]);
    

    const filterReaded = ()=>{
        const readedBooks = userBooks?.filter(item=>item.UserTag==="Read")
        setReadedBooks(readedBooks)
        setFilteredReaded(true)
        setFilteredReading(false)
        setFilteredToRead(false)
        setUnfiltered(false)
    }

    const filterToRead = ()=>{
        const toReadBooks = userBooks?.filter(item=>item.UserTag==="To Read")
        setToReadBooks(toReadBooks)
        setFilteredToRead(true)
        setFilteredReading(false)
        setFilteredReaded(false)
        setUnfiltered(false)
    }

    const filterReading = ()=>{
        const readingBooks = userBooks?.filter(item=>item.UserTag==="Reading")
        setReadingBooks(readingBooks)
        setFilteredReading(true)
        setFilteredToRead(false)
        setFilteredReaded(false)
        setUnfiltered(false)
    }

    const allBooks = ()=>{
        setFilteredReading(false)
        setFilteredToRead(false)
        setFilteredReaded(false)
        setUnfiltered(true)
    }

    console.log(filteredReaded)
    console.log(filteredReading)
    console.log(filteredToRead)


    return (
        <div>
            <div>
                <button onClick={()=>filterReaded()}>Read</button>
                <button onClick={()=>filterToRead()}>To Read</button>
                <button onClick={()=>filterReading()}>Reading</button>
                <button onClick={()=>allBooks()}>allBooks</button>
            </div>
            
            <div className='full-bookshelf-container'>


                { filteredReaded ? 
                     bookshelfFull === false ? console.log("empty") : readedBooks?.map(item=>{
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
        </div>
       
    )
    }




