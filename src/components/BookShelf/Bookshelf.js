import React, {useState, useEffect} from 'react'
import add from '../../files/add.svg'
import EmptyBookshelf from './EmptyBookshelf'
import FullBookshelf from './FullBookshelf'
import Header from '../Header/Header'

export default function BookShelf ({baseUrl}) {

  const[isfull, setisfull] = useState(false)

  useEffect(() => {
    let getbooks = window.localStorage.getItem('bookShelf') 
    getbooks !== null ? setisfull(true): setisfull(false)
    console.log(getbooks)
    console.log(isfull)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div >
        <Header baseUrl={baseUrl} />
        <div className='bookshelf-container'>
            <div className='bookshelf-header-container'>
                <h1>My Bookshelf</h1>
                <div>
                  <a href='/search' className='add-btn'>
                    <img className='add-icon' src={add} alt='add-icon'></img>
                    <span>Add Book</span>
                  </a>
                </div>     
            </div> 
            {isfull !== false ? <FullBookshelf/> : <EmptyBookshelf/>} 
        </div>
          
    </div>
  )
}
