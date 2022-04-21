import React from 'react'
import like from "../../assets/img/like.svg"
import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"
import img4 from "../../assets/img/img4.png"
import img5 from "../../assets/img/img5.png"
import img6 from "../../assets/img/img6.png"
import img7 from "../../assets/img/img7.png"
import img8 from "../../assets/img/img8.png"
import img9 from "../../assets/img/img9.png"
import img10 from "../../assets/img/img10.png"
import img11 from "../../assets/img/img11.png"
import img12 from "../../assets/img/img12.png"
import img13 from "../../assets/img/img13.png"
import img14 from "../../assets/img/img14.png"
import img15 from "../../assets/img/img15.png"
import img16 from "../../assets/img/img16.png"
import img17 from "../../assets/img/img17.png"
import img18 from "../../assets/img/img18.png"

function Images() {
  return (
    <>
     <div class="body">
        <h1>Categories</h1>
        <p>Choose your backgrounds</p>

        <div class="all-img">
          <div class="imgs">
            <h1>Room Background</h1>
            <div class="img">
              <div class="image">
                <img src={img1} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img2} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img3} alt="" />
                <img class="like" src={like} alt="" />
              </div>
            </div>
          </div>
          <div class="imgs">
            <h1>Tech Background</h1>
            <div class="img">
              <div class="image">
              <img src={img4} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img5} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img6} alt="" />
                <img class="like" src={like} alt="" />
              </div>
            </div>
          </div>
          <div class="imgs">
            <h1>Office Background</h1>
            <div class="img">
              <div class="image">
              <img src={img7} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img8} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img9} alt="" />
                <img class="like" src={like} alt="" />
              </div>
            </div>
          </div>
          <div class="imgs">
            <h1>Abstract Background</h1>
            <div class="img">
              <div class="image">
              <img src={img10} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img11} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img12} alt="" />
                <img class="like" src={like} alt="" />
              </div>
            </div>
          </div>
          <div class="imgs">
            <h1>Car Background</h1>
            <div class="img">
              <div class="image">
              <img src={img13} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img14} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img15} alt="" />
                <img class="like" src={like} alt="" />
              </div>
            </div>
          </div>
          <div class="imgs">
            <h1>Galaxy Background</h1>
            <div class="img">
              <div class="image">
              <img src={img16} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img17} alt="" />
                <img class="like" src={like} alt="" />
              </div>

              <div class="image">
              <img src={img18} alt="" />
                <img class="like" src={like} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Images