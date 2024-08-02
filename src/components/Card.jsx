import React from "react";
import "../styling/Card.css";

const Card = ({ title, desc, image}) => {
    return (
        <div className="card">
           {image && <img src={image} alt="" className="card-image"/>}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-desc">{desc}</p>
            </div>
        </div>
    );
};

export default Card;