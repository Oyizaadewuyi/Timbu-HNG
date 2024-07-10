import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <nav>
            <div className="menu-icon">
            <i className="ri-menu-line"></i>
            </div>
            <ul className='nav-links'>
                <li><Link to="/home">Home</Link></li>
                <li>About Us</li>
                <li><Link to="/shop">Shop</Link></li>


            </ul>

            <div className='Nav-brand'>
                <h2>TimbuShop</h2>
            </div>

            <div className='nav-icons'>
            <a href="#" className='icons'><i className="ri-search-line"></i></a>
            <a href="#" className='icons'> <i className="ri-shopping-cart-2-line"></i></a>
            </div>
            
                <button>Sign Up</button>
                
        </nav>
    </header>
      


  )
}

export default NavBar
