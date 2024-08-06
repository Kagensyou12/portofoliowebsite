import React from "react";
import '../styling/Jankenpon.css';
import { useNavigate } from "react-router-dom";

function Jankenpon() {
    const navigate = useNavigate();

    const backToProjects = () => {
        navigate('/projects');
    } 
    return (
        <div className="jankenpon">
            <div className="back-button">
                <button type="button" className="btn-back" onClick={backToProjects}>
                    <img src="/backbutton3.gif" alt="" />
                </button>
            </div>
            <div className="jkp-title">
                Jankenpon
            </div>
            <div className="jkp-img">
                <img src="/Jankenpon.jpg" alt="" />
            </div>
            <div className="jkp-desc">
                <p className="jkp-p1">
                    Welcome to Jankenpon, this website is built by myself using HTML, CSS and JavaScript. I built this website when i was learning to code HTML, CSS and JavaScript all over again.
                    So, what is jankenpon? it is a traditional game mostly known as rock, paper, scissors. This traditional game is widely known all over the world. The terms Jankenpon has the meaning of "Beginning with Rocks".
                </p>
                <p className="jkp-p2">
                    In Japan, jankenpon is used to settle disagreements, select participants, and determine the order in which people will do something. It is also an important part of making friends with Japanese people.

                </p>
                </div> 
            
        </div>
    );
}

export default Jankenpon;
