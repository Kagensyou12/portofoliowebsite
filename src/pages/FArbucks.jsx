import React from "react";
import '../styling/FArbucks.css';
import { useNavigate } from "react-router-dom";

function FArbucks() {
    const navigate = useNavigate();

    const backToProjects = () => {
        navigate('/projects');
    } 
    return (
        <div className="farbucks">
            <div className="back-button">
                <button type="button" className="btn-back" onClick={backToProjects}>
                    <img src="/backbutton3.gif" alt="" />
                </button>
            </div>
            <div className="FAr-title">
                FArbucks
            </div>
            <div className="FAr-img">
                <img src="/FArbucks.jpg" alt="" />
            </div>
            <div className="FAr-desc">
                <p className="FAr-p1">
                Welcome to FArbucks! This site is a special project I developed during my college classes, tailored specifically for coffee enthusiasts. FArbucks offers a seamless experience with user registration and login functionalities, enabling users to manage their coffee-related activities effortlessly. Built with HTML, CSS, and JavaScript, it combines a sleek design with robust functionality to deliver an engaging and user-friendly interface. Dive in and explore a platform crafted with passion for all things coffee!
                </p>
                </div> 
            
        </div>
    );
}

export default FArbucks;
