import React, {useState, useEffect, useContext} from 'react'
import add from '../../files/add.svg'
import EmptyBookshelf from './EmptyBookshelf'
import FullBookshelf from './FullBookshelf'
import Header from '../Header/Header'
import { UserContext } from '../context/UserContext'

export default function BookShelf ({baseUrl}) {

  const[isfull, setisfull] = useState(false)
  const {loggedIn}=useContext(UserContext)

  useEffect(() => {
    let getbooks = window.localStorage.getItem('bookShelf') 
    getbooks !== null ? setisfull(true): setisfull(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);


  return (
    <div >
        <Header baseUrl={baseUrl}/>
        <div className='bookshelf-container'>
            <div className='bookshelf-header-container'>
                <h1>My Bookshelf</h1>
                <div>
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
            {isfull !== false ? <FullBookshelf/> : <EmptyBookshelf/>} 
        </div>
          
    </div>
  )
}
