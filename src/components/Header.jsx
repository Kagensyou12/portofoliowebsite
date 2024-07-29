import React from "react";
import '../styling/App.css';

function Header() {
  return (
    <header className='header'>
      <div className='btn-head'>
        <a href="/home"><button>Home</button></a>
        <a href="/projects"><button>Projects</button></a>
        <a href="/about"><button>About Me</button></a>
        <a href="/contact"><button>Contact Me</button></a>
      </div>
    </header>
  );
}

export default Header;
