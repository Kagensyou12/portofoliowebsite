import React from "react";
import "../styling/Project.css";
import "../styling/Card.css";
import Card from "../components/Card";

function Project() {
    return (
        <div className="project-page">
            <div className="project-holder">
                <div className="title-container">
                    <h1 className="project-title">Projects</h1>
                </div>
                <div className="project-content">
                    <Card
                        image="/FArbucks.jpg"
                        title="FArbucks"
                        desc="Website for coffee lovers"
                        link="/projects/farbucks"
                    />
                    <Card
                        image="/Jankenpon.jpg"
                        title="Jankenpon"
                        desc="Website for playing simple game of rock paper scissors."
                        link="/projects/jankenpon"
                    />
                    <Card
                        image="/portofoliowebsite2.png"
                        title="Portofolio"
                        desc="My Portofolio in a form of a Website."
                        link="/projects/portofolio"
                    />
                </div>
            </div>
        </div>
    );
}

export default Project;
