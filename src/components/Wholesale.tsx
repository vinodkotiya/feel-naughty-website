
import React from 'react';
import { Building, CheckCircle, Leaf, Mail } from 'lucide-react';

const Wholesale = () => {
  return (
    <section id="wholesale" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wholesale Partners</h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Bring the Nauty experience to your customers. We partner with cafés, wellness centers, and retail locations that share our values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-section">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Building className="mr-3 h-6 w-6" />
              Perfect For Your Business
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Cafés & Coffee Shops</h4>
                  <p className="opacity-80">
                    Expand your menu with a premium herbal option that appeals to health-conscious customers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Wellness Centers & Spas</h4>
                  <p className="opacity-80">
                    Offer a nourishing beverage that aligns with your wellness philosophy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Health Food Stores</h4>
                  <p className="opacity-80">
                    Stock a product that meets the growing demand for natural coffee alternatives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Hotels & Hospitality</h4>
                  <p className="opacity-80">
                    Elevate your guest experience with a unique, locally crafted beverage option.
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="mailto:wholesale@nautyelixirs.com" 
              className="inline-flex items-center px-6 py-3 bg-primary-foreground text-foreground rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact for Wholesale
            </a>
          </div>
          
          <div className="reveal-section bg-background/10 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-primary-foreground/20">
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 mr-3 text-secondary-foreground" />
              <h3 className="text-2xl font-bold">Our Wholesale Program</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="border-b border-primary-foreground/20 pb-3">
                <span className="font-semibold block">Competitive wholesale pricing</span>
                <span className="opacity-80">Attractive margins to support your business</span>
              </li>
              <li className="border-b border-primary-foreground/20 pb-3">
                <span className="font-semibold block">Flexible order minimums</span>
                <span className="opacity-80">Options for businesses of all sizes</span>
              </li>
              <li className="border-b border-primary-foreground/20 pb-3">
                <span className="font-semibold block">Marketing support</span>
                <span className="opacity-80">Beautiful display materials and product education</span>
              </li>
              <li className="border-b border-primary-foreground/20 pb-3">
                <span className="font-semibold block">Staff training</span>
                <span className="opacity-80">We'll ensure your team knows how to prepare and present our elixirs</span>
              </li>
              <li>
                <span className="font-semibold block">Fast, reliable shipping</span>
                <span className="opacity-80">Throughout Canada and the US</span>
              </li>
            </ul>
            
            <p className="italic">
              "Adding Nauty Elixirs to our café menu has been a huge success. Our customers love having a delicious, organic option that supports their health goals."
            </p>
            <p className="font-medium mt-2">— Coastal Café, Vancouver</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;
