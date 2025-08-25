import { Product } from '@/contexts/CartContext';
import productShirt1 from '@/assets/product-shirt-1.jpg';
import productShirt2 from '@/assets/product-shirt-2.jpg';
import productShirt3 from '@/assets/product-shirt-3.jpg';
import productShirt4 from '@/assets/product-shirt-4.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Tropical Hawaiian Shirt',
    price: 139.00,
    image: productShirt1,
    rating: 5,
    category: 'Casual',
    description: 'Beautiful Hawaiian shirt with tropical floral pattern. Made from high-quality cotton blend for comfort and durability.'
  },
  {
    id: '2',
    name: 'Geometric Summer Shirt',
    price: 89.99,
    image: productShirt2,
    rating: 4,
    category: 'Summer',
    description: 'Modern casual summer shirt with unique geometric pattern. Perfect for beach days and casual outings.'
  },
  {
    id: '3',
    name: 'Vintage Art Print Tee',
    price: 59.99,
    image: productShirt3,
    rating: 4,
    category: 'Vintage',
    description: 'Stylish vintage t-shirt with artistic print. Comfortable fit and premium cotton material.'
  },
  {
    id: '4',
    name: 'Premium Button-Up',
    price: 179.00,
    image: productShirt4,
    rating: 5,
    category: 'Formal',
    description: 'Premium button-up shirt with minimalist design. Perfect for both casual and formal occasions.'
  },
  {
    id: '5',
    name: 'Ocean Breeze Polo',
    price: 99.99,
    image: productShirt1,
    rating: 4,
    category: 'Polo',
    description: 'Comfortable polo shirt with ocean-inspired design. Great for golf and casual activities.'
  },
  {
    id: '6',
    name: 'Urban Style Hoodie',
    price: 149.99,
    image: productShirt2,
    rating: 5,
    category: 'Streetwear',
    description: 'Trendy urban hoodie with modern design elements. Perfect for street style fashion.'
  },
  {
    id: '7',
    name: 'Classic Denim Jacket',
    price: 199.99,
    image: productShirt3,
    rating: 5,
    category: 'Denim',
    description: 'Timeless denim jacket in classic blue. A wardrobe essential that never goes out of style.'
  },
  {
    id: '8',
    name: 'Relaxed Fit Chinos',
    price: 119.99,
    image: productShirt4,
    rating: 4,
    category: 'Pants',
    description: 'Comfortable chinos in relaxed fit. Perfect for casual and semi-formal occasions.'
  }
];

export const featuredProducts = products.slice(0, 4);
export const categories = ['All', 'Casual', 'Summer', 'Vintage', 'Formal', 'Polo', 'Streetwear', 'Denim', 'Pants'];