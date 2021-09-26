import {ProductsService} from '../../services/producst.service';
import {Product} from '../../shared/Product';
import {FilterByCategory} from './FilterByCategory';
import "./Shop.scss"
import {IoAddCircleOutline} from 'react-icons/io5'

export const Shop = () => {
  // TODO adding feedback to loading products
  // TODO infinite scroll or pagination to increase render time
  const products: Product[] = ProductsService.getProducts();

  function imageLoadError() {
    // TODO handler to image error
  }

  function ProductItem(props: any) {
    const {product} = props;

    return (
        product &&
        <div className={"product-wrapper"}>
          <img alt={'product'} src={product.imageUrl} onError={imageLoadError}/>
          <div className={'description'}>
            <span>{product.name}</span>
            <span className={'price'}>{'$' + product.price}</span>
          </div>
          {/*TODO: use of Redux to send events to another components */}
          <button className={"button light"}><IoAddCircleOutline/> Add to Cart</button>
        </div>
    )
  }

  function ProductList(props: any) {
    const {products} = props
    return <div className={'product-list'}>{products.map((product: Product) => <ProductItem key={product?.productId?.value} product={product}/>)}</div>
  }

  return (
      <div className={"shop-wrapper"}>
        <FilterByCategory/>
        <ProductList products={products}/>
      </div>
      );
}