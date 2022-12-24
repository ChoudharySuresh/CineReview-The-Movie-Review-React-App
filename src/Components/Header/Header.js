import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from "./Logo.png"
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <Link to="/"><img src={mainlogo} className="logo"></img></Link>
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
        </div>
    </div>
  )
}

export default Header
