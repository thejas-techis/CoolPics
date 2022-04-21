import React from 'react'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'
import img19 from "../assets/img/img19.png"
import img21 from "../assets/img/img21.svg"
function Home() {
  return (
    <>
    <Header/>
    <div class="background">
        <img class="blur" src={img19} alt="" />
        <div class="background-text">
          <p>Check our crazy and funky </p>
          <p class="text2"><strong>BACKGROUND'S</strong> for you</p>
          <input class="input" type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Search for your background" />
          <img class="search" src={img21} alt="" />
        </div>
      </div>
    <Footer/>
    
    </>
  )
}

export default Home