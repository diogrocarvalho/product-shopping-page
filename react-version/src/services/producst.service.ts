import products from '../data/products.json'
import {Product} from '../shared/Product';
import {Category} from '../shared/Category';

export const ProductsService = {
  getProducts: (params?: any): Product[] => {
    return products || [];
  },
  getCategories: (params?: any): Category[] => {
    // TODO filter sub and subsub categories
    const set = new Set(products.map( product => product.category))
    set.delete("");

    return Array.from(set).map( (category, index) => {
       return {
         id: index.toString(),
         label: category
       } as Category
    }) || []
  }
}