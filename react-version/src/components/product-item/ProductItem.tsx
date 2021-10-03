import {IoAddCircleOutline} from 'react-icons/io5';
import {AddRemoveItem} from '../add-remove-item/AddRemoveItem';
import './ProductItem.scss';
import {useDispatch} from 'react-redux';
import {addToCart, remove} from '../../reducers/productSlice';

export function ProductItem(props: any){
  const dispatch = useDispatch();
  const {product} = props;


  const imageLoadError = (ev: any) => {
    ev.target.src = 'no-image-placeholder.png'
  }

  const addToCard = () => {
    dispatch(addToCart(product.productId.value))
  }

  const removeItem = () => {
    dispatch(remove(product.productId.value))
  }

  const renderAddToCartButton = () => {
    return (
        product.quantityInCart === 0 ?
            <button className={"button light full-width"} onClick={() => {addToCard()}}><IoAddCircleOutline/> Add to Cart</button> :
            <AddRemoveItem quantity={product.quantityInCart} add={() => addToCard()} remove={() => removeItem()}/>
    )
  }

  const getProductName = () => {
    return product?.name?.split(',')[0]
  }

  const getProductSize = () => {
    return product.name?.split(',')[1] || ``;
  }

  return (
      <div className={"product-wrapper"}>
        <img alt={'product'} src={product.imageUrl} onError={imageLoadError}/>
        <div className={'description'}>
          <span>
            <div>{getProductName()}</div>
            <div>{getProductSize()}</div>
          </span>
          <span className={'price'}>{'$' + product.price}</span>
        </div>
        {renderAddToCartButton()}
      </div>
  )
}