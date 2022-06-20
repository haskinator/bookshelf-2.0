import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import HeaderSearch from '../Header/HeaderSearch';

export default function BookDetail() {

    const {bookId} = useParams();

    const[bookDetail, setBookDetail] = useState();
    const[bookLoaded,setBookLoaded] = useState();
   

    useEffect(() => {
        let bookDetails = window.localStorage.getItem('bookShelf') 
        setBookDetail(JSON.parse(bookDetails))
        setBookLoaded(true)
      }, []);

    //   books.map((item, i)=>{
      
    const toRead = (bookCurrent) => {
        bookCurrent.tag = 'To Read'
        console.log(bookCurrent)
        console.log(bookDetail)
        window.localStorage.removeItem('bookShelf')
        window.localStorage.setItem('bookShelf', JSON.stringify(bookDetail))
        var reading = document.getElementById('reading')
        reading.classList.remove('readingClick')
        var read = document.getElementById('read')
        read.classList.remove('readClick')      
        var toRead = document.getElementById('toread')
        toRead.classList.toggle('toReadClick')
        console.log(toRead)
    }

    const reading = (bookCurrent) => {
        bookCurrent.tag = 'Reading'
        console.log(bookCurrent)
        console.log(bookDetail)
        window.localStorage.removeItem('bookShelf')
        window.localStorage.setItem('bookShelf', JSON.stringify(bookDetail))  
        var read = document.getElementById('read')
        read.classList.remove('readClick')      
        var toRead = document.getElementById('toread')
        toRead.classList.remove('toReadClick')
        var reading = document.getElementById('reading')
        reading.classList.toggle('readingClick')
        console.log(reading)
    }

    const read = (bookCurrent) => {
        bookCurrent.tag = 'Read'
        console.log(bookCurrent)
        console.log(bookDetail)
        window.localStorage.removeItem('bookShelf')
        window.localStorage.setItem('bookShelf', JSON.stringify(bookDetail))  
        var toRead = document.getElementById('toread')
        toRead.classList.remove('toReadClick')
        var reading = document.getElementById('reading')
        reading.classList.remove('readingClick')
        var read = document.getElementById('read')
        read.classList.toggle('readClick')
        console.log(read)
    }
    
    const currentBook = bookDetail?.filter(item=>item.id===bookId)

  return (
    <div className='main-container'>
        <HeaderSearch/>
        {bookLoaded !== true ? console.log("nic") : 
        <div className='book-detail'>
            <div className='book-detail-left'>
                <img className='book-detail-img' src={currentBook[0].imgUrl} alt='book-cover'></img>
                <div className='buttons'>
                    <button onClick={()=>toRead(currentBook[0])} className='buttons toread' id='toread'>To read</button> 
                    <button onClick={()=>reading(currentBook[0])} className='buttons reading' id='reading'>Reading</button> 
                    <button onClick={()=>read(currentBook[0])}  className='buttons read' id='read'>Read</button> 
                </div>
            </div>
 
            <div className='book-detail-data'>
                <h3 className='book-detail-author' > {currentBook[0].author}</h3>
                <h3 className='book-detail-header'>{currentBook[0].title}</h3>
                <p className='book-detail-pages' >{currentBook[0].pages} pages </p>
                <p className='book-detail-info' >{currentBook[0].info.replace(/(<([^>]+)>)/gi, "")}</p>
            </div>
        
        </div>    
         
        }
    </div>
  )
}

// var result = bookDetail.map(item => {
//     if (bookCurrent.id === bookDetail.id)
//     item.tag='toRead' 
//     return console.log(result)
//     // window.localStorage.setItem('bookShelf', {'tag': 'toRead'} )

//   })