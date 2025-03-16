
import React from 'react';
import { ArrowRight, Coffee, Leaf } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section id="shop" className="section-padding texture-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafted with precision and care, our herbal blends offer the ritual of coffee without the caffeine crash.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-section">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80" 
              alt="Herbal Dark Roast" 
              className="rounded-lg shadow-xl mx-auto max-w-full h-auto"
            />
          </div>
          <div className="reveal-section">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Herbal Dark Roast
            </h3>
            <p className="text-muted-foreground mb-6">
              Our signature blend combines roasted chicory root, dandelion root, and chaga mushroom for a rich, robust flavor that perfectly mimics your favorite dark roast coffee.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2 flex items-center">
                <Coffee className="mr-2 h-5 w-5 text-primary" />
                Simple Preparation
              </h4>
              <ol className="space-y-2 ml-8 list-decimal">
                <li>Heat fresh water to just below boiling</li>
                <li>Add 1-2 tablespoons to your French press or pour-over</li>
                <li>Pour hot water and steep for 3-5 minutes</li>
                <li>Add your favorite milk and sweetener if desired</li>
              </ol>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2 flex items-center">
                <Leaf className="mr-2 h-5 w-5 text-secondary" />
                Key Ingredients
              </h4>
              <ul className="space-y-1 ml-8 list-disc">
                <li>Organic roasted chicory root</li>
                <li>Wildcrafted dandelion root</li>
                <li>Wild-harvested chaga mushroom</li>
                <li>Organic cacao nibs</li>
                <li>Organic cinnamon</li>
              </ul>
            </div>
            
            <a 
              href="https://shopify.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-accent"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
