import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import './Shop.css'
import dress1 from '../../assets/dress1.png'
import dress2 from '../../assets/dress2.png'
import dress3 from '../../assets/dress3.png'
import dress4 from '../../assets/dress4.png'
import dress5 from '../../assets/dress5.png'
import dress6 from '../../assets/dress6.png'
import dress7 from '../../assets/dress7.png'
import dress8 from '../../assets/dress8.png'
import dress9 from '../../assets/dress4.png'







function Shop() {
    const [amount, setAmount] = useState(1);
    return (
        <>
            <h1 className="shop-heading">Shop with us here</h1>
            <ul className="shop-sections">
                <li className="shop-links"><Link>All Brands</Link></li>
                <li className="shop-links"><Link>New Arrivals</Link></li>
                <li className="shop-links"><Link>Offer Deals</Link></li>
            </ul>
            <div className="shop">
                <div className="card">
                    <div className="card-image">
                        <img src={dress1} alt="SHEIN: Roupas Feminas gown" />
                    </div>
                    <h3 className="product-name">SHEIN: Roupas Feminas gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$39.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={dress2} alt="SAFEIRODO: Long sleeve gown" />
                    </div>
                    <h3 className="product-name">SAFEIRODO: Long sleeve gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$59.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={dress3} alt="FISDY: Stylish long sleeve dress with flounced Hem" />
                    </div>
                    <h3 className="product-name">FISDY: Stylish long sleeve dress with flounced Hem</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$70.00</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={dress4} alt="Sweet Elegance Solid Fold Square Collar A line grown" />
                    </div>
                    <h3 className="product-name">Sweet Elegance Solid Fold Square Collar A line grown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$99.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={dress5} alt="Surplice Neck Tie Waist Long Sleeve Dress" />
                    </div>
                    <h3 className="product-name">Surplice Neck Tie Waist Long Sleeve Dress</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$85.00</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={dress6} alt="Rushed V Neck Bodycon Mini Dress" />
                    </div>
                    <h3 className="product-name">Rushed V Neck Bodycon Mini Dress</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$99.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={dress7} alt="SHEIN: Ruffled Floral Bodycon gown" />
                    </div>
                    <h3 className="product-name">SHEIN: Ruffled Floral Bodycon gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$59.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src={dress8} alt="FISDY: Classic V Neck Wrapped gown" />
                    </div>
                    <h3 className="product-name">FISDY: Classic V Neck Wrapped gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$59.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div><div className="card">
                    <div className="card-image">
                        <img src={dress7} alt="SAFEIRODO: Long sleeve Loose gown" />
                    </div>
                    <h3 className="product-name">SAFEIRODO: Long sleeve Loose gown</h3>
                    <ul className="sizes">
                        <li className="s">S</li>
                        <li className="m">M</li>
                        <li className="l">L</li>
                        <li className="xl">XL</li>
                    </ul>
                    <p className="price">$59.99</p>
                    <div className="amount-and-add">
                        <div className="amount">
                            <i className="ri-subtract-line decrement"></i>
                            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <i className="ri-add-line increment"></i>
                        </div>
                        <p className="btn">Add to cart</p>
                    </div>
                </div>
            </div>
            <ul className="more-items">
                <li className="previous-page"><Link>Previous</Link></li>
                <li className="page-1"><Link>1</Link></li>
                <li className="page-2"><Link>2</Link></li>
                <li className="page-3"><Link>3</Link></li>
                <li className="page-4"><Link>4</Link></li>
                <li className="next-page"><Link>Next</Link></li>
            </ul>
        </>
    );
}
 
export default Shop;