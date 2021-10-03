import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../shared/Product'

interface Cart {
  id: string,
  quantity: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as Cart[]
  },
  reducers: {
    add: (state: any, action: PayloadAction<Product>) => {
      const {productId} = action.payload;
      const i = state.value.findIndex((cart: Cart) =>  cart.id === productId.value)

      if(i === -1) {
        state.value = [...state.value, {id: productId.value, quantity: 1} as Cart];
      } else {
        state.value = state.value.map((item: Cart, index: number) => {
          if(item.id !== productId.value) {
            return item
          }
          return {...item, quantity: item.quantity + 1}
        })
      }
    },
    getById: (state: any, action: PayloadAction<string>) => {
      return state.value.find((i: Cart) => i.id === action.payload)
    }
  }
})

export const { add, getById} = cartSlice.actions;

export default cartSlice.reducer;