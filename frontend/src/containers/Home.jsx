import React from 'react';

import img19 from '../assets/img/img19.png';
import img21 from '../assets/img/img21.svg';
function Home() {
    return (
        <>
            <div class="background">
                <img class="blur" src={img19} alt="" />
                <div class="background-text">
                    <p>Check our crazy and funky </p>
                    <p class="text2">
                        <strong>BACKGROUND'S</strong> for you
                    </p>
                    <form action="search" method="get">
                        <input
                            class="input"
                            name="search"
                            type="text"
                            placeholder=" Search for your background"
                        />
                        <img class="search" src={img21} alt="" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;
