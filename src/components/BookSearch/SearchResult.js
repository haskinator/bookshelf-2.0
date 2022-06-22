import React, {useContext}  from 'react'
import circle from '../../files/circle.svg'
import check from '../../files/check.svg'
import axios from 'axios'
import { UserContext } from '../context/UserContext'


export default function SearchResult ({books,baseUrl}) {

  const {user}=useContext(UserContext)

  const addBook =(bookDetails, i)=>{
      const identifier = bookDetails.id
      const title = bookDetails?.volumeInfo?.title
      const imageUrl = bookDetails?.volumeInfo?.imageLinks?.thumbnail
      const pages = bookDetails?.volumeInfo?.pageCount
      const author = bookDetails?.volumeInfo?.authors?.[0]
      const description = bookDetails?.volumeInfo?.description
      const tag = "";

      document.getElementsByClassName('add-book-btn')[i].src = {check}.check

      axios.post(`${baseUrl}/users/${user.id}/books`,{
        identifier,title,imageUrl,pages,author,description, tag
      })
      .then(res=>{
        console.log(res.data)
      })
      .catch(err=>console.log(err))
      
  }

  console.log(user.id)



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

