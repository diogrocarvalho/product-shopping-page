import {ProductsService} from '../../services/producst.service';
import {Product} from '../../shared/Product';
import {CategoryFilter} from '../../components/category-filter/category-filter';
import "./Shop.scss"
import {ProductItem} from '../../components/product-item/ProductItem';
import {useEffect, useState} from 'react';
import {Category} from '../../shared/Category';

export const Shop = () => {
  // TODO adding feedback to loading products
  // TODO infinite scroll or pagination to decrease render time

  const [selectedCategory, setSelectedCategory] = useState(``);
  const [productList, setProductList] = useState([] as Product[]);

  const updateCategoryFilter = (category: Category) => {
    if(category.label === selectedCategory){return}
    setSelectedCategory(category.label);
  }

  useEffect(() => {
    const filterProducts = () => {
      const products: Product[] = ProductsService.getProducts();
      if(selectedCategory?.length) {
        const prods: Product[] = products.filter(p => p.category === selectedCategory);
        setProductList(prods)
      } else {
        setProductList(products);
      }
    }
    filterProducts();
  }, [selectedCategory]);

  const ProductList = (props: any) => {
    const {products} = props
    return <div className={'product-list'}>
      {products.map((product: Product) =>
        <ProductItem key={product?.productId?.value} product={product}/>
      )}
    </div>
  }

  return (
      <div className={"shop-wrapper"}>
        <CategoryFilter filtered={(category: Category) => {updateCategoryFilter(category)}}/>
        <ProductList products={productList}/>
      </div>
      );
}