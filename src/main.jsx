import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Myspace from './components/myspace/myspace.jsx';
import Search from './components/search/search.jsx';
import Tv from './components/tv/tv.jsx';
import Login2 from './components/myspace/login2.jsx';
import Movies from './components/movies/movies.jsx';
import Sports from './components/sports/sports.jsx';
import Cathegories from './components/cathegories/cathegories.jsx';
import LatestRelease from './components/home/latestrelease.jsx'; 
import TrailerPage from './components/home/Trailer.jsx'; 
import LatestRelease2 from './components/home/latestrelease2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Myspace />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/tv",
    element: <Tv />,
  },
  {
    path: "/login2",
    element: <Login2 />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/sports",
    element: <Sports />,
  },
  {
    path: "/cathegories",
    element: <Cathegories />,
  },
  {
    path: "/latest-release",  
    element: <LatestRelease />,
  },
  {
    path: "/trailer/:movieId",  
    element: <TrailerPage />,
  },
  {
    path: "/latest-release-2",  
    element: <LatestRelease2 />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
