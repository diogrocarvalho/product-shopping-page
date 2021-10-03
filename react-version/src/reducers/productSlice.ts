import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductsService} from '../services/producst.service';
import {Product} from '../shared/Product';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: ProductsService.getProducts(),
    currentCategoryFilter: ''
  },
  reducers: {
    filter: (state: any, action) => {
      const category = action.payload
      if(category && category !== state.currentCategoryFilter) {        
        state.currentCategoryFilter = category;
        state.value = state.value.map((product: Product) => {
                  return {...product, show: category === product.category}
                }
            );
      }
    },
    clearFilter: (state: any) => {
      state.currentCategoryFilter = '';
      state.value = state.value.map((product: Product) => {
            return {...product, show: true}
          }
       );
    },
    addToCart: (state:any, action: PayloadAction<string>) => {
      const productId: string = action.payload;

      state.value = state.value.map((item: Product) => {
        if(item.productId.value !== productId) {
          return item
        }
        return {...item, quantityInCart: item.quantityInCart + 1}
      })
    },
    remove: (state:any, action: PayloadAction<string>) => {
      const productId: string = action.payload;
      state.value = state.value.map((item: Product) => {
        if(item.productId.value !== productId) {
          return item
        }
        return {...item, quantityInCart: item.quantityInCart - 1}
      })
    }
  }
})

export const { filter, clearFilter, addToCart, remove } = productSlice.actions

export default productSlice.reducer