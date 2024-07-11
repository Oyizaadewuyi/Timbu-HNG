import React from 'react'
// import './Footer.css'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
        <div className="footer-section">
          <h1>TimbuShop</h1>
          <p>Be a part of TimbuShop<br />
            community and stay connected <br />
            with the latest fashion trends and <br />
            exclusive offers. Follow us on social <br />
            media and sign up for our <br />
            newsletter to receive updates on <br /> 
            new arrivals and special <br />
            promotions.</p>
          <div className="social-icons">
          <img src={whatsapp} alt="" />
           <img src={instagram} alt="" />
           <img src={facebook} alt="" />
          </div>
        </div>
        <div className="footer-section">
          
            <h4>Shop with us</h4>
            <ul>
            <li>Casual gowns</li>
            <li>Mini gowns</li>
            <li>Corporate gowns</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Private Policy</h4>
          <ul>
            <li>Return policy</li>
            <li>Terms & Condition</li>
            <li>Warranty Policies</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>+234 9024840960</li>
            <li>Timbushop@gmail.com</li>
            <li>Lagos Island, Nigeria</li>
          </ul>
         </div>
      </footer>
  )
}

export default Footer
