import React from 'react';

const ProductsList = ({products}) => {
  if(products.length > 0){
    return (
      <ul className="row p-0 m-0 products">
          {products.map(product => <li className="col-12 col-sm-6 col-lg-4 product__item" data-color={product.color} key={product.text}>{product.text}<span className="product__item--arrow">&#8681;</span><span className="product__item--info">{product.basket}</span></li>)}
      </ul>
    );
  }
  return (
    <p className="text-center p-4 products__empty">Brak wyników, spróbuj wyszukać ponownie.</p>
  );
}

export default ProductsList;