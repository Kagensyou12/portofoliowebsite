import React from "react";
import "../styling/Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ title, desc, image, link }) => {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate(link);
    }
    return (
        <div className="card" onClick={handleclick}>
           {image && <img src={image} alt="" className="card-image"/>}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-desc">{desc}</p>
            </div>
        </div>
    );
};

export default Card;