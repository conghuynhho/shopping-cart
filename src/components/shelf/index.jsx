import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../services/shelf/action';
import Spinner from '../UI/spinner';
import ProductItem from './product';
import Sort from './sort/';
import './styles.scss';

function Shelf(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.shelf);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const generateProductList = (state) => {
    if (state.fetchDataPending) return;
    if (state.products.length === 0) {
      return <h2>Opps, there is no product to show</h2>
    }
    if (state.error) {
      return <h2>Opps, something was wrong, please try again later</h2>
    }

    const list = state.products.map((product) => {
      return (
        <ProductItem key={product.id} product={product} />
      );
    })
    return list;
  }

  return (
    <div className="shelf-container">
      <div className="shelf-header">
        <div><p>Tìm thấy <b>{state.products.length}</b> sản phẩm</p></div>
        <Sort />
      </div>
      {/* {product} */}
      {state.fetchDataPending && <Spinner />}
      <div className="product-item-container">
        {generateProductList(state)}
      </div>
    </div>
  );
}

export default Shelf;