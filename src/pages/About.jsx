import React from "react";
import '../styling/About.css';

function AboutMe() {
    return (
        <div className="abt">
            <div className="abt-wrapper">
                <div className="abt-title">
                    <h1>About Me</h1>
                </div>
                <hr className="line"/>
                <div className="abt-content">
                    <p>Hi, my name is Hadisurya. I'm currently a third-year student at Bina Nusantara University, majoring in Computer Science. 
                        My academic journey has been both challenging and rewarding, providing me with a solid foundation in various areas of computing. 
                        I have a strong passion for web development, particularly using React, which I find incredibly powerful for building dynamic and interactive user interfaces. 
                        Over the past few years, I have honed my skills by working on numerous projects, both independently and as part of a team. </p>

                    <p>Beyond web development, I am deeply interested in exploring other programming domains. 
                    Mobile programming has caught my attention, as I see it as a crucial skill in our increasingly mobile-first world.
                    I'm also fascinated by game development, which combines creativity with technical expertise to create immersive experiences. 
                    </p> 

                    <p>My curiosity doesn't stop there; I am always eager to learn new languages and frameworks to expand my versatility as a developer.
                    In addition to my technical pursuits, I enjoy collaborating with like-minded individuals and working with said individuals. 
                    These experiences have not only sharpened my problem-solving skills but also taught me the importance of teamwork and communication.
                    </p> 
                    
                    <p>I believe that continuous learning and adaptability are key in the ever-evolving field of technology, and I am committed to staying updated with the latest trends and innovations.
                    My ultimate goal is to leverage my skills and knowledge to make a meaningful impact in the tech industry, contributing to projects that improve people's lives and push the boundaries of what's possible.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
