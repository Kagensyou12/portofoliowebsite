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
                    />
                    <Card
                        image="/Jankenpon.jpg"
                        title="Jankenpon"
                        desc="Website for playing simple game of rock paper scissors."
                    />
                    <Card
                        image="/portofoliowebsite.jpg"
                        title="Portofolio"
                        desc="My Portofolio in a form of a Website."
                    />
                </div>
            </div>
        </div>
    );
}

export default Project;
