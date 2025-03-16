
import React from 'react';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nauty Elixirs</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Premium herbal coffee alternatives crafted on Salt Spring Island. Feel naughty, stay grounded with our organic, wellness-focused elixirs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#shop" className="text-background/80 hover:text-background">Shop</a></li>
              <li><a href="#about" className="text-background/80 hover:text-background">About Us</a></li>
              <li><a href="#benefits" className="text-background/80 hover:text-background">Benefits</a></li>
              <li><a href="#wholesale" className="text-background/80 hover:text-background">Wholesale</a></li>
              <li><a href="#faq" className="text-background/80 hover:text-background">FAQ</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-background">Terms of Service</a></li>
              <li><a href="#" className="text-background/80 hover:text-background">Shipping Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-background">Return Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          <p>&copy; {currentYear} Nauty Elixirs. All rights reserved.</p>
          <p className="mt-2">Made with organic ingredients and love on Salt Spring Island, BC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
