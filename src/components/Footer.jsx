import React from 'react';
import Github from '../assets/images/github.svg'
import Linkedin from '../assets/images/linkedin.svg'
// const Mailto = require('react-mailto');

const Footer = () =>{
  return(
    <footer>
      <div id='social-ctn'>
        <a href='https://github.com/lorianahines'><img className='social' src={Github} alt='github'/></a>
        <a href='https://linkedin.com/in/loriana-hines/'><img className='social' src={Linkedin} alt='linked-in'/></a>
      </div>
      <h3 className='footer-text'>Loriana Hines © 2019</h3>
      {/* <h3 className='footer-text'><a href='mailto: hello@codeloriana.com'>hello@codeloriana.com</a></h3> */}
    </footer>
  )
}

export default Footer