/* eslint-disable no-lone-blocks */
import React, {useState, useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import HeaderSearch from '../Header/HeaderSearch';
import { UserContext } from '../context/UserContext';
import axios from 'axios';


export default function BookDetail({baseUrl}) {

    const {bookId} = useParams();

    const[bookLoaded,setBookLoaded] = useState();
    const {user,setUser}=useContext(UserContext)
    const {userBooks,setUserBooks}=useContext(UserContext)
    const [userTag, setUserTag]=useState();

   

    useEffect(() => {
        userBooks ? setBookLoaded(true) : setBookLoaded(false)
        userBooks ?
        axios.get(`${baseUrl}/users/${user.id}/books/${bookId}`,{
        })
        .then(res=>{
            const userBook = res.data
            setUserTag(userBook[0].tag)
            console.log(userTag)
        })
        .catch(err=>console.log(err))

        : console.log("null")
        

        if (userTag === "To Read") {
                var reading = document.getElementById('reading')
                reading.classList.remove('readingClick')
                var read = document.getElementById('read')
                read.classList.remove('readClick')      
                var toRead = document.getElementById('toread')
                toRead.classList.add('toReadClick')
                console.log(toRead)
            }

        if (userTag === "Reading") {
            var read = document.getElementById('read')
            read.classList.remove('readClick')      
            var toRead = document.getElementById('toread')
            toRead.classList.remove('toReadClick')
            var reading = document.getElementById('reading')
            reading.classList.toggle('readingClick')
            console.log(reading)
        }
        
        if (userTag === "Read") {
            var toRead = document.getElementById('toread')
            toRead.classList.remove('toReadClick')
            var reading = document.getElementById('reading')
            reading.classList.remove('readingClick')
            var read = document.getElementById('read')
            read.classList.toggle('readClick')
            console.log(read)
        }

      }, [userBooks,userTag]);



    const toRead = () => {
        const tag = 'To Read'
        axios.patch(`${baseUrl}/users/${user.id}/books/${currentBook[0].Identifier}`,{
            tag
        })
        .then(res=>{
 
        })
        .catch(err=>console.log(err))
        
        var reading = document.getElementById('reading')
        reading.classList.remove('readingClick')
        var read = document.getElementById('read')
        read.classList.remove('readClick')      
        var toRead = document.getElementById('toread')
        toRead.classList.toggle('toReadClick')
        console.log(toRead)
    }

    console.log(userTag)

    const reading = (bookCurrent) => {
        const tag = 'Reading'
        axios.patch(`${baseUrl}/users/${user.id}/books/${currentBook[0].Identifier}`,{
            tag
        })
        .then(res=>{
 
        })
        .catch(err=>console.log(err))

        var read = document.getElementById('read')
        read.classList.remove('readClick')      
        var toRead = document.getElementById('toread')
        toRead.classList.remove('toReadClick')
        var reading = document.getElementById('reading')
        reading.classList.toggle('readingClick')
        console.log(reading)
    }

    const read = (bookCurrent) => {
        const tag = 'Read'
        axios.patch(`${baseUrl}/users/${user.id}/books/${currentBook[0].Identifier}`,{
            tag
        })
        .then(res=>{
 
        })
        .catch(err=>console.log(err))

        var toRead = document.getElementById('toread')
        toRead.classList.remove('toReadClick')
        var reading = document.getElementById('reading')
        reading.classList.remove('readingClick')
        var read = document.getElementById('read')
        read.classList.toggle('readClick')
        console.log(read)
    }
    
    const currentBook = userBooks?.filter(item=>item.Identifier===bookId)

  return (
    <div className='main-container'>
        <HeaderSearch/>
        {bookLoaded !== true ? console.log("gogo") : 
        <div className='book-detail'>
            <div className='book-detail-left'>
                <img className='book-detail-img' src={currentBook[0].ImageUrl} alt='book-cover'></img>
                <div className='buttons'>
                    <button onClick={()=>toRead(currentBook[0])} className='buttons toread' id='toread'>To read</button> 
                    <button onClick={()=>reading(currentBook[0])} className='buttons reading' id='reading'>Reading</button> 
                    <button onClick={()=>read(currentBook[0])}  className='buttons read' id='read'>Read</button> 
                </div>
            </div>
 
            <div className='book-detail-data'>
                <h3 className='book-detail-author'> {currentBook[0].Author}</h3>
                <h3 className='book-detail-header'>{currentBook[0].BookTitle}</h3>
                {currentBook[0].PageNumber ?
                    <p className='book-detail-pages'>{currentBook[0].PageNumber} pages </p>
                : null
                }
                <p className='book-detail-info'>{currentBook[0].Description}</p>
            </div>
        
        </div>    
         
        }
    </div>
  )
}

