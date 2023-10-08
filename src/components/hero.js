import React from "react";
import logo from './download.png'
import MovieList from "./MovieList";
const HeroSection = () => {

  return (
    <>
      <div className="background--img">
        <div className="hero--text">
          <img src={logo} alt="starwars logo"></img>
        </div>
        <div>
         <MovieList/>
        </div>
      </div>;
    </>
  )
}
export default HeroSection;