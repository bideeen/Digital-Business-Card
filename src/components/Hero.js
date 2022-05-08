import React from "react";
import grid1 from '../img/photo-grid.png';

export default function Hero(){
    return(
        <section>
            <img src={grid1} className="hero--photo" alt=''/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}