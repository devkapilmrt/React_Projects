import { useEffect, useState } from "react";
import "./app.css";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  let [watchlist, setWatchList] = useState([])

  let handleAddWatchList = (movieObj)=>{
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }
  let handleRemoveFromWatchList = (movieObj) =>{
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id!=movieObj.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))

  }
  useEffect(()=>{
  let moviesFromLocalStorage = localStorage.getItem('moviesApp')
  if(!moviesFromLocalStorage){
  return
  }
  setWatchList(JSON.parse(moviesFromLocalStorage))
  
  },[])
  return (
    <>
      <BrowserRouter >
        <NavBar />
        <Routes>
        <Route path="/" element={<><Banner/><Movies  watchlist={watchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} handleAddWatchList={handleAddWatchList} /></>}/>
        <Route path="/Watchlist" element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />}/>

          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
