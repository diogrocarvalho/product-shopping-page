export interface ProductId {
  value: string
}

export interface Product {
  productId: ProductId;
  name: string;
  category: string;
  imageUrl: string;
  price: number;
  description: string;
  quantityInCart: number;
  addedToCart: boolean;
  show: boolean;
}