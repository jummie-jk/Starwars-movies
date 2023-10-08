  
import React, { useState, useEffect } from 'react';
import Loader from './loader';


function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films');
        if (!response.ok) {
          throw new Error('Network response was not ok!');
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="movie-container">
      {loading ? (
      <div className='center-loader no-grid loader-container'>
        <Loader/>
        </div>
      ) : (
        movies.map((movie) => (
          <div className="movie-card" key={movie.episode_id}>
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-date'> {movie.release_date}</p>
            <p className='movie-text'>{movie.opening_crawl}</p>
            <a  className="movie-info"href="#">More Info</a>
           
          </div>
        ))
      )}
    </div>
  );
}

export default MovieList;


