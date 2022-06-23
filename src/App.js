import React,{useEffect,useState} from 'react'
import { UserContext } from './components/context/UserContext';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BookSearch from './components/BookSearch/BookSearch';
import Bookshelf from './components/BookShelf/Bookshelf';
import HeaderSearch from './components/Header/HeaderSearch';
import BookDetail from './components/BookDetail/BookDetail';
import axios from 'axios';


function App() {

const baseUrl = 'https://bookshelf-project-mimo.herokuapp.com'
const [user,setUser]=useState({})
const [loggedIn,setLoggedIn]=useState(false)
const [userBooks, setUserBooks] = useState()

useEffect(() => {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    setLoggedIn(true)
    const foundUser = JSON.parse(loggedInUser);
    setUser(foundUser);
    console.log(loggedIn)
  }
  loggedIn ? 
      axios.get(`${baseUrl}/users/${user.id}/books`,{
      })
      .then(res=>{
        setUserBooks(res.data)
      })
      .catch(err=>console.log(err))

    : console.log("not logged in")

}, [loggedIn]);

  return (
    <UserContext.Provider value={{user: user,setUser, loggedIn: loggedIn,setLoggedIn, userBooks: userBooks,setUserBooks}}>
    <div> 
      <BrowserRouter>    
        <Routes>
          <Route path='/' element={
              <div className='main-container'>
                <Bookshelf baseUrl={baseUrl} userBooks={userBooks} /> 
              </div>
            }
          /> 
          <Route path='/search' element= {<BookSearch baseUrl={baseUrl}/>}/>
          <Route path='/search' element= {<HeaderSearch/>}/>
          <Route path='/bookdetail/book/:bookId' element={<BookDetail baseUrl={baseUrl}/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  
  );
}

export default App;
