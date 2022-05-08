import React from "react";

export default function Card(props){
    var imageName = require(`../img/${props.coverImg}`)

    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === 'Online'){
        badgeText = 'ONLINE'
    }

    return(
        <div className="card">
            <div className="card--badge">{badgeText}</div>
            <img src={imageName} className="card--image" alt={imageName}/>
            <div className="card--stats">
                <img src={props.icon} className="card--stats" alt="star.png" />
                <span className="gray">{props.stats.rating}({props.stats.reviewCount}) • </span>
                <span className="gray">{props.stats.location}</span>
            </div>
            <span className="card--title">{props.title}</span>
            <span className="card--price">From <b>{props.price}</b>/ person</span>

        </div>
    )
}