import React from 'react'
import logo from "../../assets/img/coolpics-logo.png"

function Header() {
  return (
    <>
      <header class="head">
        <div class="logo">
         <a href="/"> <img src={logo} alt=""/> </a>
        </div>
        <div class="favs">
          <a href="/favorite"><h1>FAVORITE</h1></a>
          <a href="/category"><h1>CATEGORY</h1></a>
        </div>
      </header>
    </>
  )
}

export default Header