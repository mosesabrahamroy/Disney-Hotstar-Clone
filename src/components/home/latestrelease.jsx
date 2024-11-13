import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./Movie.css";

export default function LatestRelease({ deviceType }) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=ee0a7f2ca4e4c90ae6967e065b764acc"
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  const fetchTrailer = (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=ee0a7f2ca4e4c90ae6967e065b764acc`
      )
      .then((res) => {
        const trailer = res.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        navigate(`/trailer/${movieId}`, {
          state: {
            trailerUrl: trailer
              ? `https://www.youtube.com/embed/${trailer.key}`
              : "",
          },
        });
      });
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 8 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 6 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 5 },
  };

  return (
    <>
      <div className="flex justify-between">
        <p className="text-white ml-28 font-bold text-2xl mb-2 mt-4">
          Latest Releases
        </p>
        <a href="/latest-release-2">
          <button className="text-gray-500 mr-8 font-bold text-xl mb-2 mt-4">
            View All <i class="fa-solid fa-greater-than"></i>
          </button>
        </a>
      </div>

      <div className="ml-28">
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          ssr
          infinite
          autoPlaySpeed={1000}
          transitionDuration={500}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              onMouseEnter={() => setHoveredMovieId(movie.id)}
              onMouseLeave={() => setHoveredMovieId(null)}
            >
              <div className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="md:h-52 rounded-xl px-1 mb-2 hover:opacity-75"
                />
                {hoveredMovieId === movie.id && (
                  <div className="movie-details">
                    <p className="movie-title">{movie.title}</p>
                    <p className="movie-description">
                      {movie.overview.substring(0, 100)}...
                    </p>
                    <button
                      onClick={() => fetchTrailer(movie.id)}
                      className="watch-now-btn"
                    >
                      Watch Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
