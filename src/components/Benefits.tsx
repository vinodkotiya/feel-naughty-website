
import React from 'react';
import { Heart, Leaf, Shield } from 'lucide-react';

const BenefitCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-background rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300 reveal-section">
      <div className="inline-flex items-center justify-center p-3 bg-muted rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our herbal coffee alternatives are crafted with powerful ingredients that support your body naturally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<Heart className="h-6 w-6 text-accent" />}
            title="Digestive Support"
            description="Dandelion root helps stimulate liver function and aids digestion, making our elixirs gentle on your stomach unlike traditional coffee."
          />
          
          <BenefitCard 
            icon={<Leaf className="h-6 w-6 text-secondary" />}
            title="Prebiotic Power"
            description="Chicory root is rich in inulin, a prebiotic fiber that supports gut health by feeding the beneficial bacteria in your microbiome."
          />
          
          <BenefitCard 
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="Immune Support"
            description="Chaga mushroom provides powerful antioxidants and immune-modulating properties that help your body adapt to stress and environmental challenges."
          />
        </div>
        
        <div className="mt-16 text-center reveal-section">
          <h3 className="text-2xl font-bold mb-4">Enjoy the ritual, skip the jitters</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our customers love that they can enjoy their morning ritual without the caffeine crash, anxiety, or disrupted sleep that often comes with traditional coffee.
          </p>
          <div className="inline-block bg-background border border-border rounded-lg p-6 shadow-md">
            <p className="italic text-lg mb-4">
              "I didn't think I could ever give up coffee until I tried Nauty Elixirs. Now I get to enjoy my morning cup without the afternoon crash. Game changer!"
            </p>
            <p className="font-medium">— Sarah T., Victoria BC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
