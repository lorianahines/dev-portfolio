import React from 'react'
import Profile from '../assets/images/profile.png'

const About = () =>{
  return(
    <div id='about-ctn'>
      <img id='profile' src={Profile} alt=""/>
      <div id='bio-ctn'>
        <p id='bio'>I use <span id='sleek'>sleek</span> code and <span id='eloquent'>eloquent</span> design to create customized, <span id='user' className='bold-text'>user-friendly</span> solutions. I am a life-long learner who constantly seeks the opportunity to <span className='bold-text' id='grow'>grow</span> both as a person and a professional.</p>
        <h4 ><a id='mail-to' href='mailto: hello@codeloriana.com'>hello@codeloriana.com</a></h4>
      </div>
     
    </div>
  )
}

export default About