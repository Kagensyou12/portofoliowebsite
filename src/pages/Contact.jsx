import React from "react";
import "../styling/Contact.css";

function Contact () {
    return (
        <div className="contact-page">
            <div className="contact-holder">
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <hr className="line1"/>
                <div className="contact-info">
                    <div className="contact-info1">
                        <h1>Mail</h1>
                        <a href="mailto:hhadisurya01@gmail.com">↗ hhadisurya01@gmail.com</a>
                    </div>
                    <div className="contact-info2">
                        <h1>Social Media</h1>
                        <ul className="social-list">
                            <li> <a href="https://www.instagram.com/hadisurya09" target="_blank" rel="noopener noreferrer">↗ Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/hadisurya" target="_blank" rel="noopener noreferrer">↗ LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;