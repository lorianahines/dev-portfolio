import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({allowContact}) => {
    return(
        <nav>
            <Link to='/' className='links'><li className='nav-link'>About</li></Link>
            <Link to='/projects' className='links'><li className='nav-link'>Projects</li></Link>
            <Link to='/contact'  className='links'><li onClick={allowContact}className='nav-link'>Contact</li></Link>
        </nav>
    )
}

export default Nav