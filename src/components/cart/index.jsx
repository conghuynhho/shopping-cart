import React from 'react';
import CartProduct from './cart-product/'
import './styles.scss'

function Cart(props) {
  // const [isOpen] = useState(false);

  return (
    <div className="cart">
      {/* {isOpen && (
        <div className="cart__close-btn">
          X
        </div>
      )} */}

      <div className="bag cart__open-btn">
        <span className="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" id="i-cart" viewBox="0 0 28 28" fill="none"><path d="M22.167 8.167h-3.5V7a4.667 4.667 0 00-9.334 0v1.167h-3.5a1.167 1.167 0 00-1.166 1.166v12.834a3.5 3.5 0 003.5 3.5h11.666a3.5 3.5 0 003.5-3.5V9.333a1.167 1.167 0 00-1.166-1.166zM11.667 7a2.333 2.333 0 114.666 0v1.167h-4.666V7zM21 22.167a1.167 1.167 0 01-1.167 1.166H8.167A1.167 1.167 0 017 22.167V10.5h2.333v1.167a1.167 1.167 0 002.334 0V10.5h4.666v1.167a1.167 1.167 0 102.334 0V10.5H21v11.667z" fill="currentColor"></path></svg>
        </span>
        <span className="bag__quantity">{2}</span>
      </div>

      <div className="cart-content-wrapper">
        <div className="cart-header">
          <span className="cart-header--title">
            <h4>4 sản phẩm</h4>
            <p>trong giỏ hàng</p>
          </span>
        </div>
        <div className="cart-body">
          <div className="cart-item-list">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
        </div>
        <div className="cart-footer">
          <div className="check-out-btn">
            Thanh toán:
            <span> 29.000.000đ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;