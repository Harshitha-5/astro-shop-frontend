import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '500+', label: 'Products' },
    { number: '50+', label: 'Countries' },
    { number: '15+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to ensure you love every purchase.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest materials and work with trusted manufacturers for lasting quality.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving fashion enthusiasts worldwide with fast, reliable shipping and excellent service.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a community of fashion lovers who inspire and support each other.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            About Our Story
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fashion Forward,<br />
            <span className="text-primary-foreground/90">Always</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            For over 15 years, we've been curating exceptional fashion experiences, 
            bringing you the latest trends and timeless classics from around the world.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a small boutique with a passion for quality fashion has grown 
                into a global platform connecting style enthusiasts with the brands they love. 
                Our journey has been driven by one simple belief: everyone deserves to feel 
                confident and beautiful in what they wear.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we partner with over 200 brands worldwide, from emerging designers to 
                established fashion houses, ensuring our customers have access to the most 
                diverse and exciting fashion collections available.
              </p>
              <Button size="lg" className="bg-gradient-primary">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-card rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Made with Love</h3>
                  <p className="text-muted-foreground">
                    Every product is carefully selected with our customers in mind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do, from product selection 
              to customer service and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Download Our App</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the best shopping experience with our mobile app. Available on iOS and Android.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Shop on the Go</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span>Browse thousands of products with enhanced search</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span>Exclusive mobile-only deals and early access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span>Push notifications for sales and new arrivals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span>Easy checkout with saved payment methods</span>
                  </li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" size="lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-foreground rounded text-background flex items-center justify-center text-sm">
                      📱
                    </div>
                    <span>Download for iOS</span>
                  </div>
                </Button>
                <Button variant="outline" size="lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-foreground rounded text-background flex items-center justify-center text-sm">
                      🤖
                    </div>
                    <span>Download for Android</span>
                  </div>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-center space-x-6">
                {/* Mobile App Mockups */}
                <div className="w-48 h-96 bg-gradient-card rounded-3xl p-4 shadow-strong transform -rotate-6">
                  <div className="w-full h-full bg-primary/5 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-primary/20 rounded"></div>
                        <div className="h-3 bg-primary/20 rounded w-3/4 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-48 h-96 bg-gradient-card rounded-3xl p-4 shadow-strong transform rotate-6">
                  <div className="w-full h-full bg-primary/5 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-primary/20 rounded"></div>
                        <div className="h-3 bg-primary/20 rounded w-2/3 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;