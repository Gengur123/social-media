import React from 'react'
import './NavbarBlock.css';

// nav
// header
// main
  // section
  // article
// footer

function NavbarBlock ({ tweetCountAddOne }) {

  return (
    <nav>
      <div>
        <button className="navbar-button">Home</button>
        <button className="navbar-button">Notifications</button>
        <button className="navbar-button">Messages</button>
      </div>
      
      <div>
        <input className="navbar-search" placeholder="Search"></input>
        <button className="navbar-tweet" onClick={tweetCountAddOne}>Tweet</button>
      </div>
    </nav>
  )
}

export default NavbarBlock;