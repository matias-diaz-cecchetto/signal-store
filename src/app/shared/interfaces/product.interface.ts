export interface Product {
  categoy: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export interface ProductItemCart {
  product: Product,
  quantity: number, // Para saber cuantos productos hay en el carrito de compras
}
