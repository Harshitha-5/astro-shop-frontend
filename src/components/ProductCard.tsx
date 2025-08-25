import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart, Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart } = useCart();

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-warning text-warning' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <Card className={`group cursor-pointer transition-smooth hover:shadow-product overflow-hidden ${className}`}>
      <div className="relative overflow-hidden bg-gradient-card">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 mt-1">
            {renderStars(product.rating)}
            <span className="text-sm text-muted-foreground ml-2">({product.rating})</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </div>
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            className="bg-gradient-primary hover:opacity-90 transition-smooth"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;