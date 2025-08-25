import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Ultimate Guide to Summer Fashion Trends 2024',
      excerpt: 'Discover the hottest summer trends that are taking the fashion world by storm. From vibrant colors to sustainable fabrics, learn how to stay stylish while being environmentally conscious.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Fashion Trends',
      image: '/api/placeholder/400/250'
    },
    {
      id: '2',
      title: 'Sustainable Fashion: Making Conscious Choices',
      excerpt: 'Explore how to build a sustainable wardrobe without compromising on style. Learn about eco-friendly materials, ethical brands, and tips for extending the life of your clothing.',
      author: 'Mike Chen',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Sustainability',
      image: '/api/placeholder/400/250'
    },
    {
      id: '3',
      title: 'Styling Tips: From Day to Night Looks',
      excerpt: 'Master the art of transitional styling with our expert tips. Learn how to transform your daytime outfit into an elegant evening look with just a few key accessories.',
      author: 'Emma Davis',
      date: 'March 10, 2024',
      readTime: '4 min read',
      category: 'Styling Tips',
      image: '/api/placeholder/400/250'
    },
    {
      id: '4',
      title: 'The Rise of Minimalist Fashion',
      excerpt: 'Discover how minimalism is revolutionizing the fashion industry. Learn about capsule wardrobes, quality over quantity, and building a timeless collection of essential pieces.',
      author: 'Alex Rivera',
      date: 'March 8, 2024',
      readTime: '6 min read',
      category: 'Lifestyle',
      image: '/api/placeholder/400/250'
    },
    {
      id: '5',
      title: 'Color Psychology in Fashion',
      excerpt: 'Understand how colors affect mood and perception in fashion. Learn which colors boost confidence, create different impressions, and how to use color theory in your daily wardrobe choices.',
      author: 'Lisa Park',
      date: 'March 5, 2024',
      readTime: '8 min read',
      category: 'Fashion Psychology',
      image: '/api/placeholder/400/250'
    },
    {
      id: '6',
      title: 'Building Your Professional Wardrobe',
      excerpt: 'Create a powerful professional image with the right clothing choices. From interview outfits to boardroom presentations, learn how to dress for success in any professional setting.',
      author: 'James Wilson',
      date: 'March 3, 2024',
      readTime: '9 min read',
      category: 'Professional Style',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'Fashion Trends', 'Sustainability', 'Styling Tips', 'Lifestyle', 'Fashion Psychology', 'Professional Style'];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            #readmore
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Stay updated with the latest fashion trends, styling tips, and industry insights
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-strong transition-smooth">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-card">
                  <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6"></div>
                      <h3 className="text-xl font-semibold text-muted-foreground">Featured Article Image</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="default" className="w-fit mb-4 bg-primary">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-medium transition-smooth">
                <div className="aspect-video bg-gradient-card">
                  <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div>
                      <p className="text-muted-foreground text-sm">Article Image</p>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      <span className="sr-only">Read more about {post.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to our newsletter for the latest fashion insights, styling tips, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="bg-gradient-primary">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;