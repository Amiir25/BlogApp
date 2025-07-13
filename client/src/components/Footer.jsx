import React from 'react'
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <>
    <footer>
        <img src={Logo} alt="" width='100' />
        <span>
            Made with <span className='love'>❤</span> and <b>React.js</b>
        </span>
    </footer>
    </>
  )
}

export default Footer