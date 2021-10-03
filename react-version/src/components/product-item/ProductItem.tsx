import {IoAddCircleOutline} from 'react-icons/io5';
import {useState} from 'react'
import {AddRemoveItem} from '../add-remove-item/AddRemoveItem';
import './ProductItem.scss';

export function ProductItem(props: any){

  const {product} = props;
  const [quantity, setQuantity] = useState(0);

  const imageLoadError = () => {
    // TODO handler to image error
  }

  const addToCard = () => {
    addItem();
  }

  const addItem = () => {
    setQuantity(quantity + 1);
  }

  const removeItem = () => {
    if(quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  }

  const renderAddToCartButton = () => {
    return (
        quantity === 0 ?
            <button className={"button light full-width"} onClick={() => {addToCard()}}><IoAddCircleOutline/> Add to Cart</button> :
            <AddRemoveItem quantity={quantity} add={() => addItem()} remove={() => removeItem()}/>
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