import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <nav>
            <div className="menu-icon">
            <i className="ri-menu-line"></i>
            </div>
            <ul className='nav-links'>
                <li>Home</li>
                <li>About Us</li>
                <li>Shop</li>


            </ul>

            <div className='Nav-brand'>
                <h2>TimbuShop</h2>
            </div>

            <div className='nav-icons'>
            <a href="#" className='icons'><i class="ri-search-line"></i></a>
            <a href="#" className='icons'> <i class="ri-shopping-cart-2-line"></i></a>
            </div>
            
                <button>Sign Up</button>
                
        </nav>
    </header>
      

  )
}

export default NavBar
