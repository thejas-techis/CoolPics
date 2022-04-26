import React from 'react';
import img1 from "../assets/img/img1.png"
import img2 from "../assets/img/img2.png"
import img3 from "../assets/img/img3.png"
import like from "../assets/img/like.svg"

function Search() {
    return (
        <>
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
            </div>
        </>
    );
}

export default Search;
