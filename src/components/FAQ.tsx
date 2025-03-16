
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Send } from 'lucide-react';

const faqItems = [
  {
    question: "Does it really taste like coffee?",
    answer: "Yes! Our signature blend is crafted to mimic the rich, robust flavor profile of a dark roast coffee. While no herbal alternative can be 100% identical to coffee, our customers are consistently amazed at how satisfying and coffee-like our elixirs taste."
  },
  {
    question: "Is it completely caffeine-free?",
    answer: "Yes, our products are 100% caffeine-free. They're perfect for those who are sensitive to caffeine, pregnant or nursing, or simply looking to reduce their caffeine intake without giving up their favorite ritual."
  },
  {
    question: "How do I prepare it?",
    answer: "Prepare it just like you would coffee! Use a French press, pour-over, or even a traditional coffee maker. Simply use 1-2 tablespoons per cup, add hot water just off the boil, steep for 3-5 minutes, and enjoy! It can be customized with your favorite milk and sweetener."
  },
  {
    question: "What are the health benefits?",
    answer: "Our elixirs contain ingredients known to support digestive health (dandelion root), provide prebiotic benefits (chicory root), and offer immune support (chaga mushroom). Unlike coffee, they won't cause jitters, acid reflux, or sleep disruption."
  },
  {
    question: "Are all ingredients organic?",
    answer: "Yes, we use certified organic or wildcrafted ingredients in all our products. We're committed to sustainability and ensuring the highest quality ingredients without pesticides or chemicals."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship throughout Canada and the United States. We're working on expanding our shipping options to more international locations soon. Sign up for our newsletter to be the first to know when we expand to new regions."
  },
];

const FAQ = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Here you would typically handle the form submission
    alert('Thanks for subscribing! We\'ll keep you updated on all things Nauty.');
    setEmail('');
  };

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="reveal-section">
            <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="reveal-section" id="contact">
            <div className="bg-background rounded-lg p-8 shadow-md border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                Have a question or want to stay updated? Drop us a line or join our newsletter for updates and exclusive offers.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-muted-foreground mb-2">Email: hello@nautyelixirs.com</p>
                <p className="text-muted-foreground mb-4">Phone: (250) 555-1234</p>
                <address className="text-muted-foreground not-italic">
                  Nauty Elixirs<br />
                  123 Ganges Road<br />
                  Salt Spring Island, BC V8K 2T2
                </address>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Join Our Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated with new products, recipes, and exclusive offers.
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button 
                    type="submit" 
                    className="btn-primary whitespace-nowrap flex-shrink-0 inline-flex items-center"
                  >
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
