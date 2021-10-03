import {ProductsService} from '../../services/producst.service';
import {Category} from '../../shared/Category';
import "./category-filter.scss"
import {clearFilter, filter} from '../../reducers/productSlice';
import {useDispatch} from 'react-redux';
import {BiListCheck} from 'react-icons/bi';

export const CategoryFilter = (props: any) => {

  const categories: Category[] = ProductsService.getCategories();
  const dispatch = useDispatch();

  const CategoryItem = (props: any) => {
    const {category} = props

    const filterByCategory = () => {
      if(category) {
        dispatch(filter(category?.label));
      } else {
        dispatch(clearFilter())
      }
    }

    return <span className={"item"} onClick={() => filterByCategory()}>
      {category ? category.label : <BiListCheck/>}
    </span>
  }

  const CategoryList = (props: any) => {
    const {categories} = props;
    return <div className={'list'}> {categories.map((category: Category) =>
        <CategoryItem key={category.id} category={category}/>)}
      <CategoryItem key={'clear'} category={null}/>
    </div>
  }

  return (
      <div className={"filter-by-category"}>
        <h5>Shop by category</h5>
        <CategoryList categories={categories} filtered={(category: Category)=> {
          props.filtered(category)
        }}/>
      </div>
      )
}