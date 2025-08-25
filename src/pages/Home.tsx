import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/data/products';
import heroBanner from '@/assets/hero-banner.jpg';

const Home = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $100'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure transactions'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer service'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day return policy'
    }
  ];

  const categories = [
    { name: 'Casual Wear', image: '/placeholder.svg', count: '12 Products' },
    { name: 'Summer Collection', image: '/placeholder.svg', count: '8 Products' },
    { name: 'Formal Attire', image: '/placeholder.svg', count: '15 Products' },
    { name: 'Accessories', image: '/placeholder.svg', count: '6 Products' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Fashion Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Super Value Deals
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            On all products
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80">
            Discover our latest collection of premium fashion items at unbeatable prices. 
            Quality meets affordability in every piece.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-background text-primary hover:bg-background/90 transition-bounce text-lg px-8 py-6"
          >
            <Link to="/shop">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of fashion categories to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/shop" className="group">
                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <div className="aspect-square bg-gradient-card p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                        <span className="text-2xl">👕</span>
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-smooth">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{category.count}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out our handpicked selection of premium fashion items that are trending right now.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in Touch</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter and be the first to know about new arrivals, 
              exclusive offers, and fashion updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground text-foreground"
              />
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 transition-smooth"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;