
import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <div className='check-back'>
        <button className="checkout-back">←</button>
        <h2>CheckOut</h2>
        </div>
        <p>BILLING INFORMATION</p>
        <form>
          <label>
            First name*
            <input type="text" name="firstName" />
          </label>
          <label>
            </label>
          <label>
            Country of residence*
            <select name="country">
              <option value="Nigeria">Nigeria</option>
              {/* Add other options as needed */}
            </select>
          </label>
          <label>
            Street Address*
            <input type="text" name="streetAddress" />
          </label>
          <label>
            Town/City*
            <input type="text" name="city" />
          </label>
          <label>
            Phone*
            <input type="tel" name="phone" />
          </label>
          <label>
            Postal Code*
            <input type="text" name="postalCode" />
          </label>
          <label>
            Email Address*
            <input type="email" name="email" />
          </label>
          <label>
            Order note
            <textarea name="orderNote"></textarea>
          </label>
        </form>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Subtotal: </p>
          <h5>$140.45</h5>
          <p>Shipping fee: </p>
          <h5>$10</h5>
          <p>Total amount: </p>
          <h5>$150.45</h5>
          <br/>
        <hr />
         <div className="payment-method">
                    <input type="radio" name="payment" value="bank" /><label htmlFor=""> Direct Bank Transfer
          </label>
          </div>
          

          <div className='method'>
          <p className='direct'>Make your payment directly into our bank <br />account. please use your order id as the payment <br />
          reference. Your order won't be shipped until the funds have cleared in our account</p>
          
          <h3>Payment method</h3>

            <input type="radio" name="payment" value="cheque" /> <label htmlFor="">Cheque Payment
          </label>
          
            <input type="radio" name="payment" value="paypal" /><label htmlFor="">
                 PayPal
          </label>
          
          <br />
          <hr />
        </div>
        <div className='terms-condition'>
            <input type='checkbox' id='terms' name='terms'/>
            <label htmlFor="">I have read the terms and condition</label>

            </div>        
            <button type="submit">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
