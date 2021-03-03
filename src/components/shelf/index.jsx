import React from 'react';
import './styles.scss'
import Sort from './sort/'
import product from '../../static/product-img/2.jpg'

function Shelf(props) {
  // const product = {};


  return (
    <div className="shelf-container">
      <div className="shelf-header">
        <div><p>Tìm thấy 20 sản phẩm</p></div>
        <Sort />
      </div>
      {/* {product} */}
      <div className="product-item-container">
        <div className="product-item">
          <div className="product-topper">
            Free shipping
          </div>
          <div className="product-item__image">
            <img src={product} alt="product" />
          </div>
          <p className="product-item__name">Cat Black TShirt</p>
          <div className="product-item__price">
            <div className="sale-price"><p>300.000đ</p></div>
            <div className="real-price"><small><strike>350.000đ</strike></small></div>
          </div>
          <div className="product-item__buy-btn">Thêm vào giỏ</div>
        </div>
        <div className="product-item">
          <div className="product-topper">
            Free shipping
          </div>
          <div className="product-item__image">
            <img src={product} alt="product" />
          </div>
          <p className="product-item__name">Cat Black TShirt</p>
          <div className="product-item__price">
            <div className="sale-price"><p>300.000đ</p></div>
            <div className="real-price"><small><strike>350.000đ</strike></small></div>
          </div>
          <div className="product-item__buy-btn">Thêm vào giỏ</div>
        </div>
        <div className="product-item">
          <div className="product-topper">
            Free shipping
          </div>
          <div className="product-item__image">
            <img src={product} alt="product" />
          </div>
          <p className="product-item__name">Cat Black TShirt</p>
          <div className="product-item__price">
            <div className="sale-price"><p>300.000đ</p></div>
            <div className="real-price"><small><strike>350.000đ</strike></small></div>
          </div>
          <div className="product-item__buy-btn">Thêm vào giỏ</div>
        </div>
        <div className="product-item">
          <div className="product-topper">
            Free shipping
          </div>
          <div className="product-item__image">
            <img src={product} alt="product" />
          </div>
          <p className="product-item__name">Cat Black TShirt</p>
          <div className="product-item__price">
            <div className="sale-price"><p>300.000đ</p></div>
            <div className="real-price"><small><strike>350.000đ</strike></small></div>
          </div>
          <div className="product-item__buy-btn">Thêm vào giỏ</div>
        </div>
        <div className="product-item">
          <div className="product-topper">
            Free shipping
          </div>
          <div className="product-item__image">
            <img src={product} alt="product" />
          </div>
          <p className="product-item__name">Cat Black TShirt</p>
          <div className="product-item__price">
            <div className="sale-price"><p>300.000đ</p></div>
            <div className="real-price"><small><strike>350.000đ</strike></small></div>
          </div>
          <div className="product-item__buy-btn">Thêm vào giỏ</div>
        </div>
        <div className="product-item">
          <div className="product-topper">
            Free shipping
          </div>
          <div className="product-item__image">
            <img src={product} alt="product" />
          </div>
          <p className="product-item__name">Cat Black TShirt</p>
          <div className="product-item__price">
            <div className="sale-price"><p>300.000đ</p></div>
            <div className="real-price"><small><strike>350.000đ</strike></small></div>
          </div>
          <div className="product-item__buy-btn">Thêm vào giỏ</div>
        </div>
        
        <div className="product-item">
          <div className="product-topper">
            Free shipping
          </div>
          <div className="product-item__image">
            <img src={product} alt="product" />
          </div>
          <p className="product-item__name">Cat Black TShirt</p>
          <div className="product-item__price">
            <div className="sale-price"><p>300.000đ</p></div>
            <div className="real-price"><small><strike>350.000đ</strike></small></div>
          </div>
          <div className="product-item__buy-btn">Thêm vào giỏ</div>
        </div>
        <div className="product-item">
          <div className="product-topper">
            Free shipping
          </div>
          <div className="product-item__image">
            <img src={product} alt="product" />
          </div>
          <p className="product-item__name">Cat Black TShirt</p>
          <div className="product-item__price">
            <div className="sale-price"><p>300.000đ</p></div>
            <div className="real-price"><small><strike>350.000đ</strike></small></div>
          </div>
          <div className="product-item__buy-btn">Thêm vào giỏ</div>
        </div>
      </div>
    </div>
  );
}

export default Shelf;