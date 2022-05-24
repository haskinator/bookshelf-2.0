import './App.css';
import BookSearch from './components/BookSearch/BookSearch';
import Bookshelf from './components/BookShelf/Bookshelf';
import Header2 from './components/Header/Header2';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BookDetail from './components/BookDetail/BookDetail';

function App() {

  

  return (
    <div> 
      <BrowserRouter>    
        <Routes>
          <Route path='/search' element= {<BookSearch/>}/>
          <Route path='/search' element= {<Header2/>}/>
          <Route path='/' element={
              <div className='main-container'>
                <Bookshelf/> 
              </div>
            }
          /> 
          <Route path='/bookdetail/book/:bookId' element={<BookDetail/>}/>
        </Routes>
        
      </BrowserRouter>
  
    </div>
  
  );
}

export default App;
