import React from 'react';
import { useDispatch } from 'react-redux';
import { pendingRemoveProduct } from '../../../services/cart/action';
import formatCurrency from '../../../services/utils/formatCurrency'
import PropTypes from 'prop-types'


CartProduct.propTypes = {
  product: PropTypes.object
}


function CartProduct({product}) {
  const dispatch = useDispatch();
  
  return (
    <div className="cart-product-item">
      <div className="cart-item__delete" onClick={() => dispatch(pendingRemoveProduct(product))}>
        Xoá
      </div>
      <div className="cart-item__image">
        <img src={product.imageLink} alt={product.name} />
      </div>
      <div className="cart-item__detail">
        <p className="item-name">{product.name}</p>
        <p className="item-quantity"><small>Số lượng:</small>{product.quantity}</p>
        <div className="cart-item__price">
          <p>{formatCurrency(product.salePrice) + "đ"}</p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;