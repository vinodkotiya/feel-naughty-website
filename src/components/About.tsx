
import React from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding texture-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-section">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-64 h-64 bg-primary/10 rounded-full blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80" 
                alt="Salt Spring Island" 
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow flex items-center">
                <MapPin className="h-5 w-5 text-accent mr-2" />
                <span className="text-sm font-medium">Salt Spring Island, BC</span>
              </div>
            </div>
          </div>
          
          <div className="reveal-section">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            
            <p className="text-foreground mb-4">
              Nauty Elixirs was born from a personal journey to find a satisfying alternative to coffee that didn't compromise on taste or ritual.
            </p>
            
            <p className="text-muted-foreground mb-4">
              After years of battling with caffeine sensitivity but missing the rich, comforting experience of a morning brew, our founder Emma began experimenting with herbal combinations in her Salt Spring Island kitchen.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Drawing inspiration from the island's lush landscapes and abundant natural resources, she created a blend that finally delivered the deep, complex flavors of coffee without the downsides.
            </p>
            
            <p className="text-foreground font-medium mb-6">
              What started as a personal solution quickly became a passion project to help others "feel naughty" with a delicious morning ritual while staying "grounded" in wellness and balance.
            </p>
            
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Our Commitments</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Organic, sustainably sourced ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Small-batch production for quality control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Eco-friendly packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Supporting local suppliers whenever possible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
