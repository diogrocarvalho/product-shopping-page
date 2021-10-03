import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice';
import productSlice from './reducers/productSlice';

export default configureStore({
      reducer: {
        cart: cartSlice,
        product: productSlice
      },
    })