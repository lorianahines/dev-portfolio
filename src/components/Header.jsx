import React from 'react';
import Nav from './Nav'
import Logo from './Logo'

const Header = ({allowContact}) => {

	return(
		<header>
			<Logo />
			<div id='title-ctn'>
				<h1 id='name'>Hi, I'm Loriana.</h1>
				<h2 id='titles'>Front-end Developer | <span id='designer'>Visual Designer</span></h2>
			</div>
			<Nav allowContact = {allowContact} />
		</header>
		
	)
}

export default Header