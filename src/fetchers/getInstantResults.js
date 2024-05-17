import { products } from "../constants/products";

export const getInstantResults = (q) => {

  const filteredProducts = products.filter(product => {
    
    return (
      product.name.toLowerCase().includes(q.toLowerCase()) ||
      product.category.toLowerCase().includes(q.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(q.toLowerCase()))
    );
  });

  return filteredProducts.slice(0, 6);
}