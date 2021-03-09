import React from 'react';
import { useDispatch } from 'react-redux';
import { pendingAddProduct } from '../../../services/cart/action';
import formatCurrency from '../../../services/utils/formatCurrency';

function ProductItem({ product }) {

  // onclick add product:
  /**
   * Thực hiện pendingAddProduct đó 
   * sau đó kiểm tra nếu product đó tồn tại rồi thì update quantity thôi.
   */


  const dispatch = useDispatch();
  return (
    <div className="product-item">
      {product.isFreeShipping && (
        <div className="product-topper">
          Free shipping
        </div>
      )}
      <div className="product-item__image">
        <img src={product.imageLink} alt={product.name} />
      </div>
      <p className="product-item__name">{product.name}</p>
      <div className="product-item__price">
        <div className="sale-price"><p>{formatCurrency(product.salePrice) + "đ"}</p></div>
        <div className="real-price"><small><strike>{formatCurrency(product.price) + "đ"}</strike></small></div>
      </div>
      <div className="product-item__buy-btn" onClick={()=> dispatch(pendingAddProduct(product))}>Thêm vào giỏ</div>
    </div>
  );
}
export default ProductItem;