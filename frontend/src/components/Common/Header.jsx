import React from 'react'
import logo from "../../assets/img/coolpics-logo.png"

function Header() {
  return (
    <>
      <header class="head">
        <div class="logo">
          <img src={logo} alt=""/>
        </div>
        <div class="favs">
          <h1>FAVORITE</h1>
          <h1>CATEGORY</h1>
        </div>
      </header>
    </>
  )
}

export default Header