
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-foreground">
            Nauty Elixirs
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#shop" className="text-accent hover:text-accent/80 font-medium">Shop</a>
            <a href="#about" className="hover:text-primary/80">About</a>
            <a href="#benefits" className="hover:text-primary/80">Benefits</a>
            <a href="#wholesale" className="hover:text-primary/80">Wholesale</a>
            <a href="#faq" className="hover:text-primary/80">FAQ</a>
            <a href="#contact" className="hover:text-primary/80">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#shop" className="inline-flex items-center text-accent hover:text-accent/80">
              <ShoppingBag className="h-5 w-5 mr-1" />
              <span>Shop</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#shop" className="text-accent hover:text-accent/80 font-medium py-2 border-b border-border">Shop</a>
              <a href="#about" className="hover:text-primary/80 py-2 border-b border-border">About</a>
              <a href="#benefits" className="hover:text-primary/80 py-2 border-b border-border">Benefits</a>
              <a href="#wholesale" className="hover:text-primary/80 py-2 border-b border-border">Wholesale</a>
              <a href="#faq" className="hover:text-primary/80 py-2 border-b border-border">FAQ</a>
              <a href="#contact" className="hover:text-primary/80 py-2">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
