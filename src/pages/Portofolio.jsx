import React from "react";
import '../styling/Portofolio.css';
import { useNavigate } from "react-router-dom";

function Portofolio() {
    const navigate = useNavigate();

    const backToProjects = () => {
        navigate('/projects');
    } 
    return (
        <div className="portofolio">
            <div className="back-button">
                <button type="button" className="btn-back" onClick={backToProjects}>
                    <img src="/backbutton3.gif" alt="" />
                </button>
            </div>
            <div className="port-title">
                Portofolio
            </div>
            <div className="port-img">
                <img src="/portofoliowebsite2.png" alt="" />
            </div>
            <div className="port-desc">
                <p className="port-p1">
                Welcome to my portfolio! This site is a dynamic showcase of my ongoing projects and creative endeavors. As I continue to explore new ideas and develop innovative solutions, this portfolio will grow with my work. Built with React JS, it reflects my commitment to cutting-edge technologies and my passion for continuous learning. Explore my projects and stay tuned for updates as I build and share more exciting developments.
                </p>
             
                </div> 
            
        </div>
    );
}

export default Portofolio;
