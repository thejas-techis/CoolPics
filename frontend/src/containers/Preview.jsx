import React from 'react'
import img5 from "../assets/img/img5.png"
import img9 from "../assets/img/img9.png"
import img10 from "../assets/img/img10.png"
import img15 from "../assets/img/img15.png"
import img20 from "../assets/img/img20.png"
import Images from '../components/Common/Images'

function Preview() {
  return (
    <section class="page3">
      <div class="blur">
        <Images />
      </div>
      <section class="preview">
      <img class="preview-main"  src={img20} alt="" />
        <div class="preview-sub">
        <img src={img5} alt="" />
        <img src={img10} alt="" />
        <img src={img9} alt="" />
        <img src={img15} alt="" />
        </div>  
        </section>
    </section>
  )
}

export default Preview