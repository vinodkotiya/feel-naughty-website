
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center texture-bg" id="home">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute w-full h-full object-cover opacity-30"
        >
          <source src="https://static.videezy.com/system/resources/previews/000/034/098/original/pouring.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto px-4 pt-20 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal-section">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground mb-4">
              Feel Naughty, <br /> 
              <span className="text-primary">Stay Grounded</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Herbal, organic, and crafted for wellness on Salt Spring Island, BC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#shop" className="btn-primary">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#about" className="btn-secondary">
                Our Story
              </a>
            </div>
          </div>
          <div className="reveal-section flex justify-center">
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-64 h-64 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-accent/20 rounded-full blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80" 
                alt="Nauty Elixirs herbal coffee alternative" 
                className="relative z-10 rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#shop" className="text-foreground/80 hover:text-foreground">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
