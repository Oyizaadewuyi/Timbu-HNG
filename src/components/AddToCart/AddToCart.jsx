
import React from "react";
import './AddToCart.css'
import dress1 from '../../assets/dress1.png'
import dress9 from '../../assets/dress3.png'
import dress2 from '../../assets/dress7.png'

const AddToCart = () => {
    return (
      <div className="shopping-cart">
        <div className="cart-header">
          <button className="back-button">←</button>
          <h1>Shopping Cart</h1>
          <button className="clear-cart">Clear cart</button>
        </div>
        <div className="item-order">
        <div className="cart-items">
          <div className="cart-item">
            <img src={dress1} alt="product" />
            <div className="item-details">
              <h2>SHEIN: Roupas Feminas gown</h2>
              <p>Blue gown</p>
              <div className="item-options">
                <div className="size">
                  <p>Size:</p>
                  <button className="size-button">S</button>
                  <button className="size-button selected">M</button>
                  <button className="size-button">L</button>
                  <button className="size-button">XL</button>
                </div>
                <div className="quantity">
                  <p>Quantity:</p>
                  <button className="quantity-button">-</button>
                  <input type="text" value="1" readOnly />
                  <button className="quantity-button">+</button>
                </div>
              </div>
              <button className="remove-button">Remove</button>
            </div>
            <p className="item-price">$39.99</p>
          </div>

          <div className="cart-item">
            <img src={dress9} alt="product" />
            <div className="item-details">
              <h2>Selfaido: Long Sleeve gown</h2>
              <p>Emerald Green</p>
              <div className="item-options">
                <div className="size">
                  <p>Size:</p>
                  <button className="size-button">S</button>
                  <button className="size-button selected">M</button>
                  <button className="size-button">L</button>
                  <button className="size-button">XL</button>
                </div>
                <div className="quantity">
                  <p>Quantity:</p>
                  <button className="quantity-button">-</button>
                  <input type="text" value="2" readOnly />
                  <button className="quantity-button">+</button>
                </div>
              </div>
              <button className="remove-button">Remove</button>
            </div>
            <p className="item-price">$59.99</p>
          </div>

          <div className="cart-item">
            <img src={dress2} alt="product" />
            <div className="item-details">
              <h2>Salferedo: Long Sleeve  gown</h2>
              <p>Wine color gown</p>
              <div className="item-options">
                <div className="size">
                  <p>Size:</p>
                  <button className="size-button">S</button>
                  <button className="size-button selected">M</button>
                  <button className="size-button">L</button>
                  <button className="size-button">XL</button>
                </div>
                <div className="quantity">
                  <p>Quantity:</p>
                 
                  <button className="quantity-button">-</button>
                  <input type="text" value="1" readOnly />
                  <button className="quantity-button">+</button>
                  </div>
                </div>
              
              <button className="remove-button">Remove</button>
            </div>
            <p className="item-price">$39.99</p>
          </div>
          
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="total-price">
          <p>Subtotal: </p>
          <h6>$140.45</h6>
          <p>Shipping fee: </p>
          <h6>$30</h6>
          <p>Total amount: </p>
          <h6>$170.45</h6>
          </div>
          <button className="checkout-button">Proceed To Checkout</button>
          <div className="coupon-code">
            <h5>Coupon code</h5>
            <input type="text" placeholder="Enter coupon code" />
            <button className="apply-coupon-button">Apply Coupon</button>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default AddToCart;
  
  
  