import React from "react"
import '../styling/App.css';

function Footer() {
    return (
<footer className='footer'>
<div className='footer-0'>
  <div className='f-1'>
    <img src="\linkedin.png" alt="LinkedIn" />
    <a href="https://www.linkedin.com/in/hadisurya" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
  <div className='f-2'>
    <img src="\instagram.png" alt="Instagram" />
    <a href="https://www.instagram.com/hadisurya09" target="_blank" rel="noopener noreferrer">Instagram</a>
  </div>
  <div className='f-3'>
    <img src="\gmail2.png" alt="Email" />
    <a href="mailto:hhadisurya01@gmail.com">Email</a>
  </div>
</div>
</footer>

    );
}

export default Footer;
