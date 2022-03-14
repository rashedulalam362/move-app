import React, { useEffect, useState } from 'react'
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";
// api url=a6bf9a68;
const api_url="http://www.omdbapi.com?apikey=a6bf9a68";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovies= async(title)=>{
   const response= await fetch(`${api_url}&s=${title}`);
   const data= await response.json();
   setMovies(data.Search);

  }

  useEffect(()=>{
    searchMovies()
  },[])
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input 
        placeholder="Search batman"
        value={search}
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
        
        />
         <img src={SearchIcon} alt="MOVIES" 
         onClick={()=>{
            searchMovies(search)
         }}
         />
        </div>
        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
        ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
        
      </div>
  )
}

export default App