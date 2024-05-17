import { products } from "../constants/products";

export const getSearchResults = (q) => {
    
    const filteredProducts = products.filter(product => {
      return (
        product.name.toLowerCase().includes(q.toLowerCase()) ||
        product.category.toLowerCase().includes(q.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(q.toLowerCase()))
      );
    });
    console.log(filteredProducts)
    return filteredProducts;
  }