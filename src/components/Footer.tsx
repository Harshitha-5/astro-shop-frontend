import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const aboutLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Delivery Information', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const accountLinks = [
    { name: 'Sign In', href: '#' },
    { name: 'View Cart', href: '/cart' },
    { name: 'My Wishlist', href: '#' },
    { name: 'Track My Order', href: '#' },
    { name: 'Help', href: '#' },
  ];

  const paymentMethods = [
    'Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay', 'Google Pay'
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold">Cara</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your premier destination for quality fashion. We curate the finest clothing 
                and accessories to help you express your unique style with confidence.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <Button key={index} variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/10">
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* My Account */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">My Account</h4>
            <ul className="space-y-3">
              {accountLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">About</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    562 Wellington Road, Street 32,<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">contact@cara.com</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h5 className="font-medium">Stay Updated</h5>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button size="sm" variant="secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Cara. All rights reserved. Built with passion for fashion.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-muted-foreground">We accept:</span>
            <div className="flex items-center space-x-2">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-background/10 rounded px-2 py-1">
                  <span className="text-xs font-medium">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;