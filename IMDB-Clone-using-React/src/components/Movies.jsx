import React, { useState }  from 'react'
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import Pagitnation from './Pagitnation'


function Movies({handleAddWatchList, handleRemoveFromWatchList, watchlist}) {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const handlePrev =()=>{
    if(pageNo===1){
      setPageNo(1)
    }else{
      setPageNo(pageNo-1)
    }
    
  }
  const handleNext =()=>{
    setPageNo(pageNo+1)

    
  }
  // https://freetestapi.com/api/v1/movies
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=80878ff4a83fb99c6ac4ce6141198c48&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      console.log(res.data.results)
    })
  },[pageNo])
  return (
    <div className='p-5' >
        <div className='b-color-red-200 text-2xl font-bold text-center m-5'>
          Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around'>
        
          {movies.map((movieObj)=>{
            return <MovieCard watchlist={watchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} key={movieObj.id} movieObj={movieObj} handleAddWatchList={handleAddWatchList} poster_path={movieObj.poster_path} name={movieObj.original_title}/>
          })}
          
        </div>
        <Pagitnation pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  )
}

export default Movies

// 80878ff4a83fb99c6ac4ce6141198c48