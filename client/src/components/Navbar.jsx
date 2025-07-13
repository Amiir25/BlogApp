import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" width="200" />
            </div>
            <div className="links">
                <Link className='link' to={'/?cat=art'}>
                    <h6>ART</h6>
                </Link>
                <Link className='link' to={'/?cat=science'}>
                    <h6>SCIENCE</h6>
                </Link>
                <Link className='link' to={'/?cat=tech'}>
                    <h6>TECHNOLOGY</h6>
                </Link>
                <Link className='link' to={'/?cat=cinema'}>
                    <h6>CINEMA</h6>
                </Link>
                <Link className='link' to={'/?cat=design'}>
                    <h6>DESIGN</h6>
                </Link>
                <Link className='link' to={'/?cat=food'}>
                    <h6>FOOOD</h6>
                </Link>

                <div className='user'>
                    <span>Amir</span>
                    <span>Logout</span>
                </div>

                <button className='write-btn'>
                    <Link className='link' to={'/write'}>
                        Write
                    </Link>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar