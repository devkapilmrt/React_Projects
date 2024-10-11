import React from "react";


function MovieCard({
  watchlist,
  movieObj,
  poster_path,
  name,
  handleAddWatchList,
  handleRemoveFromWatchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
        
      }
    }
    return false;
  }
  return (
    <div
      className=" h-[55vh] w-[150px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      {doesContain(movieObj)?(
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="font-bold text-white text-xl w-full p-2 text-center align-text-bottom rounded-b-xl bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;

// https://api.themoviedb.org/3/movie/popular?api_key=80878ff4a83fb99c6ac4ce6141198c48&language=en-US&page=2
