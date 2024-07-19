import React, { useState } from 'react'
// import { BrowserRouter as Link } from 'react-router-dom';

export default function Navbar() {
  const[click,setClick]= useState(true)
  
 const handleClick=()=>{
    setClick(!click)
  }
  return (
    <>

<header className="header">
  <div className="main-logo">
  <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-portfolio-job-search-flaticons-lineal-color-flat-icons-2.png" alt="external-portfolio-job-search-flaticons-lineal-color-flat-icons-2"/>
    <a href='#Home' style={{color:'red'}}>Portfolio</a>
  </div>
  
  <div id='mobile'  onClick={handleClick}>
        {click ? <i class='bx bx-menu' id='menu-icon'></i> : <i class='bx bx-x'id='menu-cross'></i> }
  </div>

<div className= {!click ? 'navbar':'nav-item'}>
  <div className="nav-bar">
    <a href="#Home" className='active'>Home</a>
    <a href="#AboutMe">About Me</a>
    <a href="#Project">Projects</a>
    <a href="#skills" >Skills</a>
    <a href="#education">Education</a>
    <a href="#Contact">Contact us</a>
   </div>
 </div>
</header>
      
    </>
  )
}
