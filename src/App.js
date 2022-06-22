import React,{useEffect,useState} from 'react'
import { UserContext } from './components/context/UserContext';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BookSearch from './components/BookSearch/BookSearch';
import Bookshelf from './components/BookShelf/Bookshelf';
import HeaderSearch from './components/Header/HeaderSearch';
import BookDetail from './components/BookDetail/BookDetail';


function App() {

const baseUrl = 'https://bookshelf-project-mimo.herokuapp.com'
const [user,setUser]=useState({})
const [loggedIn,setLoggedIn]=useState(false)

useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    setUser(foundUser);
    setLoggedIn(true)
  }
}, []);

  return (
    <UserContext.Provider value={{user: user,setUser, loggedIn: loggedIn,setLoggedIn}}>
    <div> 
      <BrowserRouter>    
        <Routes>
          <Route path='/' element={
              <div className='main-container'>
                <Bookshelf baseUrl={baseUrl} /> 
              </div>
            }
          /> 
          <Route path='/search' element= {<BookSearch/>}/>
          <Route path='/search' element= {<HeaderSearch/>}/>
          <Route path='/bookdetail/book/:bookId' element={<BookDetail/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  
  );
}

export default App;
