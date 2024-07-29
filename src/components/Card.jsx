import React from "react";
import './Card.css';

function Card({ image, title, description}){
    return (
        <div className="card">
            <img src="{image}" alt="" className="card-img" />
            <div className="card-container">
                <h3 className="title">
                    {title}
                </h3>
                <p className="desc">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card;