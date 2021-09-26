import {ProductsService} from '../../services/producst.service';
import {Category} from '../../shared/Category';
import "./FilterByCategory.scss"

export const FilterByCategory = () => {

  const categories: Category[] = ProductsService.getCategories();

  function CategoryItem(props: any) {
    const {value} = props;
    return <span className={"item"}>{value}</span>;
  }

  function CategoryList(props: any) {
    const {categories} = props;
    return categories.map((category: Category) =>
        <CategoryItem key={category.id} value={category.label}/>
    )
  }

  return (
      <div className={"filter-by-category"}>
        <h5>Shop by category</h5>
        <span className={'list'}><CategoryList categories={categories}/></span>
      </div>
      )
}