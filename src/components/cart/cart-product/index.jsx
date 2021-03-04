import React from 'react';
import itemImg from '../../../static/product-img/cart-image.jpg'
function CartProduct(props) {
  return (
    <div className="cart-product-item">
      <div className="cart-item__delete">
        Xoá
      </div>
      <div className="cart-item__image">
        <img src={itemImg} alt="Áo Đẹp" />
      </div>
      <div className="cart-item__detail">
        <p className="item-name">TShirt</p>
        <div className="cart-item__price">
          <p>10.000.000đ</p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;