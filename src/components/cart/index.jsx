import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../services/cart/action';
import updateTotal from '../../services/total/action';
import formatCurrency from '../../services/utils/formatCurrency';
import CartSGV from './cart-icon';
import CartProduct from './cart-product/';
import './styles.scss';

function Cart() {
  // state
  const [isCartDisplay, setIsCartDisplay] = useState(false);
  const cartState = useSelector(state => state.cart);
  const totalState = useSelector(state => state.total.data);
  const dispatch = useDispatch();

  // Handle Functions
  function toggleCart() {
    console.log('hihi');
    setIsCartDisplay(!isCartDisplay);
  }
  function handleCheckOut() {
    if (totalState.totalQuantity === 0) return;
    alert('Tổng giá trị đơn hàng của bạn là ❤: ' + formatCurrency(totalState.totalPrice) + 'đ');
  }
  function countTotalPrice(list) {
    if (list.length === 0) return 0;
    const result = list.reduce((total, item) => {
      total += item.salePrice;
      return total;
    }, 0);
    return result;
  }

  // Render Functions
  function loadCart(cartState) {
    if (!cartState.productToAdd && !cartState.productToRemove) return;
    let products = Array.from(cartState.products);
    const productToRemove = cartState.productToRemove;
    const productToAdd = cartState.productToAdd;
    let isExistInCart = false;
    // xu ly add
    if (productToAdd) {
      products.forEach(product => {
        if (product.id === productToAdd.id) {
          product.quantity++;
          isExistInCart = true;
        }
      })
      if (!isExistInCart) {
        products.push(productToAdd);
        isExistInCart = true;
      };
      dispatch(updateCart(products));
    };
    // xu ly remove
    // xoa 1 product 
    if (productToRemove) {
      let index = products.findIndex(product => product.id === productToRemove.id);
      if (index >= 0) {
        if (productToRemove.quantity >= 2) {
          products[index].quantity--;
        }
        else {
          products.splice(index, 1);
        }
      };
      dispatch(updateCart(products))
    }
    // xoa het 
    // if(productToRemove){
    //   let index = products.findIndex(product => product.id === productToRemove.id);
    //   if(index >= 0 ) {
    //     products.splice(index, 1);
    //   };
    // }
  }
  const generateCartList = (list) => {
    if (list.length === 0) return;
    return list.map((item, index) => <CartProduct product={item} key={index} />)
  }
  const renderCart = () => {
    if (totalState.totalQuantity === 0)
      return (
        <div className="cart-content-wrapper">
          <h3 className="empty-text">Bạn chưa có sản phẩm nào trong giỏ hàng</h3>
        </div>
      );
    return (<div className="cart-content-wrapper">
      <div className="cart-header">
        <span className="cart-header--title">
          <h4>{totalState.totalQuantity} sản phẩm</h4>
          <p>trong giỏ hàng</p>
        </span>
      </div>
      <div className="cart-body">
        <div className="cart-item-list">
          {generateCartList(cartState.products)}
        </div>
      </div>
      <div className="cart-footer">
        <div className="check-out-btn" onClick={handleCheckOut}>
          Thanh toán:
            <span>{" " + formatCurrency(countTotalPrice(cartState.products)) + "đ"}</span>
        </div>
      </div>
    </div>);
  }
  loadCart(cartState);
  // Hooks
  useEffect(() => {
    dispatch(updateTotal(cartState.products))
  }, [cartState.products, dispatch])

  return (
    <div className="cart" onMouseEnter={toggleCart} onMouseLeave={toggleCart} >
      <div className="bag cart__open-btn">
        <CartSGV />
        <span className="bag__quantity">{totalState.totalQuantity}</span>
      </div>
      {(isCartDisplay && (
        renderCart()
      ))}

    </div>
  );
}

export default Cart;