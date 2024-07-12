import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [showMenu,setShowMenu]=
    useState(false)

    const toggleMenu =() => {
      setShowMenu(!showMenu);
    };
  return (
    
    <header>
        <nav>
            <div className="menu-icon"
            onClick={toggleMenu}>
                <i className={showMenu ? 'ri-close-line' :
            'ri-menu-line'}></i>
            </div>
            <div className={`nav-links $ {showMenu ? 'show' : ''}`}>
                <ul>
                <li className='links'><Link to="/home">Home</Link></li>
                <li><Link to="/addtocart"> About Us</Link></li>
                <li className='active'><Link to="/shop">Shop</Link></li>


            </ul>
            </div>

            <div className='Nav-brand'>
                <h2>TimbuShop</h2>
            </div>

            <div className='nav-icons'>
            <a href="#" className='icons'><i className="ri-search-line"></i></a>
            <a href="#" className='icons'> <i className="ri-shopping-cart-2-line"></i></a>
            </div>
            
            {/* <div className={`button $ {showMenu ? 'show' : ''}`}>   */}
                <button >Sign Up</button>
                
                
        </nav>
    </header>
      
   
  )
}

export default NavBar
