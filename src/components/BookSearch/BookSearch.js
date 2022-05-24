import React, {useState} from 'react'
import SearchResult from './SearchResult'
import EmptyResults from './EmptyResults'
import Header2 from '../Header/Header2'

export default function BookSearch() {

    const[query,setQuery] = useState("Search book")
    const[books,setBooks] = useState()
    const[results,setResults] = useState(false)

   const inputValue = () => {
     setQuery(" ");
     
   }
   

   const handleSubmit =(e)=> {
        e.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyA6wTlob7thDkP2LPGaETX1qZQ_3MHFPYI`)
        .then(response => response.json())
        .then(result => {
            setBooks(result.items)
            setResults(true)
            })
            
   }

   console.log(results)


    return (
        <div className='main-container'>
            <Header2/>
            <div className='search-container'>
                <h1 className='search-header'>Add book</h1>
                <form className='search-bar' onSubmit={handleSubmit}>
                    <input onClick={inputValue} value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    <button className='search-btn' type="submit">Search</button>
                </form>            
            </div>
            {results===false ? <EmptyResults/> : <SearchResult books={books} result={results} /> }
            
        </div>
  )
}
