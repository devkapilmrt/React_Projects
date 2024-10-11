import React, {useEffect, useState} from 'react'
import genreIds from '../Utility/genre.js'

function Watchlist({watchlist, setWatchList, handleRemoveFromWatchList}) {
  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  console.log(genreIds)
  let sortIncreacing = ()=>{
    let sortedIncreasing = watchlist.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }
  let sortDecreasing = ()=>{
    let sortedDecreasing = watchlist.sort((movieA, movieB)=>{
      return  movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }
  // let filterForAction = () =>{
  //   let sortedAction = watchlist.map((movieObj)=>{
  //     if (movieObj.genre_ids[0] == 28){
  //       return movieObj
  //     }
  //     return null
  //   })
  //   setWatchList([...sortedAction])
  // }
  let handleFilter = (genre)=>{
    setCurrGenre(genre)
  }
  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreIds[movieObj.genre_ids[0]]
    })
    temp=new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  },[watchlist])
  return (
    <>
      <div className='flex justify-center flex-wrap text-center m-4'>
        {genreList.map((genre)=>{
        return <div onClick={()=>handleFilter(genre)} className={ currGenre == genre?"flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4":"flex justify-center items-center bg-gray-400/50 h-[3rem] w-[9rem] rounded-xl text-white font-bold mx-4"}>{genre}</div>

        })}
    </div>

    <div className='flex justify-center my-4 '>
        <input onChange={handleSearch} value={search} type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200/60 outline-none text-x px-4' />
    </div>
     <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr >
              <th>Name</th>
              <th className='flex justify-center'>
                <div onClick={sortIncreacing} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre=='All Genres'){
                return true
              }else{
                return genreIds[movieObj.genre_ids[0]]==currGenre;
              }
            }).filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj)=>{
              return <tr className='border-b-2'>
                      <td className='flex items-center px-6 py-4'>
                        <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt="" />
                        <div className='mx-10 '>{movieObj.original_title}</div>
                      </td>
                      <td>{movieObj.vote_average}</td>
                      <td>{movieObj.popularity}</td>
                      <td>{genreIds[movieObj.genre_ids[0]]}</td>
                      <td onClick={()=>handleRemoveFromWatchList(movieObj)} className='text-red-800 font-bold hover:cursor-pointer'>Delete</td>
                    </tr>
            })}
            
            

          </tbody>
        </table>
     </div>
    </>
  )
}

export default Watchlist