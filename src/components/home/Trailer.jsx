import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Trailer.css'; 

const Trailer = () => {
  const { movieId } = useParams(); 
  const [trailerUrl, setTrailerUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrailer = () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=ee0a7f2ca4e4c90ae6967e065b764acc`)
        .then((res) => {
          const trailer = res.data.results.find(
            (video) => video.type === 'Trailer' && video.site === 'YouTube'
          );
          if (trailer) {
            setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
          } 
        });
    };

    fetchTrailer();
  }, [movieId]); 

  return (
    <div className="trailer-container">
      {error ? (
        <p>{error}</p>
      ) : trailerUrl ? (
        <iframe
          className="trailer-video"
          src={trailerUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default Trailer;
