import {IoAddOutline, IoRemoveOutline} from 'react-icons/all';
import "./AddRemoveItem.scss"

interface AddRemove {
  quantity: number,
  add: () => void,
  remove: () => void
}

export function AddRemoveItem(props: AddRemove) {
  return (
      <div className={'add-remove-item-wrapper'}>
        <IoRemoveOutline className={'icon'} onClick={() => props.remove()}/>
        <span className={'value no-select'}>{ props.quantity }</span>
        <IoAddOutline className={'icon'} onClick={() => props.add()}/>
      </div>
  )
}