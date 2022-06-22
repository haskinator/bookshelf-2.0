import React, {useState, useEffect}  from 'react'
import circle from '../../files/circle.svg'
import check from '../../files/check.svg'
import axios from 'axios'


export default function SearchResult ({books}) {


  const[bookShelf,setbookShelf] = useState([])
  
  useEffect(() => {
    window.localStorage.setItem('bookShelf', JSON.stringify(bookShelf))
  }, [bookShelf]);


  const addBook =(bookDetails,i)=>{
    const found = bookShelf.some(item=>item.id===bookDetails.id);
    if(!found) {
      setbookShelf([...bookShelf,{'id':bookDetails.id, 'title':bookDetails.volumeInfo.title,'imgUrl':bookDetails.volumeInfo.imageLinks.thumbnail, 'pages':bookDetails.volumeInfo.pageCount, 'author':bookDetails.volumeInfo.authors[0], 'published':bookDetails.volumeInfo.publishedDate, 'info':bookDetails.searchInfo.textSnippet, 'tag':""}])
      document.getElementsByClassName('add-book-btn')[i].src = {check}.check

    }
  }

  return (
    <div className='search-result-after'>    
      <h3 className='search-result-count'>Results</h3>
      {books?.map((item, i)=>{
        return (
          <div key={item.id} className='search-result-book-card'> 
            <div className='search-result-book-data'>
                <p className='search-result-author'>{item.volumeInfo.authors}</p>
                <p className='search-result-title'>{item.volumeInfo.title}</p>
            </div>
            <img className='add-book-btn' onClick={()=>addBook(item,i)} src={circle} alt="circle"></img> 
          </div>
        )
      })}
    </div>
  )
}

