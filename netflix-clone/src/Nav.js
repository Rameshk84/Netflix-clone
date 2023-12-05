import React, {useState, useEffect } from 'react'
import "./Nav.css";

function Nav() {
const [show , handelShow]=useState(false);

useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 100){
            handelShow(true);
        } else handelShow(false);
    });
    return()=>{
        window.addEventListener("scroll");
    };

}, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" 
      src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
      alt="Netflix-logo"
      />
      <img className="nav__avatar" 
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      alt="Netflix-logo"
      />
    </div>
  );
}

export default Nav;
