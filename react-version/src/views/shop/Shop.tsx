import {Product} from '../../shared/Product';
import {CategoryFilter} from '../../components/category-filter/category-filter';
import "./Shop.scss"
import {ProductItem} from '../../components/product-item/ProductItem';
import React from 'react';
import {useSelector} from 'react-redux';

export const Shop = () => {
  // TODO adding feedback to loading products
  // TODO infinite scroll or pagination to decrease render time
  const products = useSelector((state: any) => state.product.value);
  const cart = useSelector((state: any) => state.cart.value);

  const ProductList = (props: any) => {
    const {products} = props
    return <div className={'product-list'}>
      {products.map((product: Product) =>
          product.show ?
        <ProductItem key={product?.productId?.value} product={product}/> : false
      )}
    </div>
  }

  return (
      <div className={"shop-wrapper"}>
        {cart.map((c:any, i:any) => <span key={i.toString()}>{c.id} - {c.quantity}</span>)}
        <CategoryFilter/>
        <ProductList products={products}/>
      </div>
      );

}