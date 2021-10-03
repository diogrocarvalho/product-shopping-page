import {ProductsService} from '../../services/producst.service';
import {Category} from '../../shared/Category';
import "./category-filter.scss"

interface ICategoryFilter {
  category: Category,
  filtered: (category: Category) => void
}

export const CategoryFilter = (props: any) => {

  const categories: Category[] = ProductsService.getCategories();

  const CategoryItem = (props: ICategoryFilter) => {
    const {category} = props
    return <span className={"item"} onClick={() => props.filtered(category) }>{category.label}</span>;
  }

  const CategoryList = (props: any) => {
    const {categories} = props;
    return categories.map((category: Category) =>
        <CategoryItem key={category.id} category={category} filtered={(value: Category)=> props.filtered(value)}/>
    )
  }

  return (
      <div className={"filter-by-category"}>
        <h5>Shop by category</h5>
        <span className={'list'}><CategoryList categories={categories} filtered={(category: Category)=> {
          props.filtered(category)
        }}/></span>
      </div>
      )
}