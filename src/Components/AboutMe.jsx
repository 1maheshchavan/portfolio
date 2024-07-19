import React from 'react'
import transparent_img from './images/contact1.png';

export default function AboutMe() {
  return (
    <>
      
     <section className='about' id='AboutMe'>

        <div className='about-img'>
          <img src={transparent_img} ></img>
        </div>

        <div className='about-content'>
            <h2 className='heading'>About <span>Me</span></h2>
            <h3 className='namesss'>MERN Stack Developer/ React Developer</h3>
            <p className='profesion'>
            A passionate Full Stack Software Developer,<br />
              having an good knowleage of building Web Applications<br />
              with HTML / CSS / JavaScript / Reactjs / bootstrap / Nodejs / <br />
              Expressjs / MySQL / Mongo db<br />
              and some other cool libraries and frameworks.
            </p>
       
        </div>
     </section>

    </>
  )
}
