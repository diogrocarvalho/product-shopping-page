import './Cart.scss'
import {IoArrowForward} from 'react-icons/io5';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Cart.scss'
export const Cart = () => {

  return (
      <div className="cart-wrapper">
        <span className={'top-content'}>
          <IoArrowForward className={'back-icon'}/>
          <span>Your Cart</span>
          <span className={"label-icon"}>
            <AiOutlineShoppingCart size={'2em'}/>
            <span>Cart</span>
          </span>
        </span>
        <div className={'items-wrapper'}/>
      </div>
  )
}