import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/hero";
import MovieList from "./components/MovieList"
// import Gallery from './Gallery/Gallery';
// import "./Welcome/Hero.css"
import "./components/Hero.css"
import "./components/MovieList.css"

function App() {
    return (
          <>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<HeroSection />} />
                  <Route path="/movie" element={<MovieList />} />
                  {/* <Route path="/login" element={<Login />} />
                  <Route path="/gallery" element={<Gallery />} /> */}
                </Routes>
            </BrowserRouter>
          </>
    );
  }
export default App;
