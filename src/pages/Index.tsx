
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Wholesale from '@/components/Wholesale';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AnimatedLeaves from '@/components/AnimatedLeaves';

const Index = () => {
  useEffect(() => {
    // Initialize smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for the navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Enhanced reveal animations with different entrance effects
    const revealElements = document.querySelectorAll('.reveal-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Add additional animation class based on data attribute
          const animType = entry.target.getAttribute('data-anim');
          if (animType) {
            entry.target.classList.add(animType);
          }
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach((element, index) => {
      // Add staggered delay to elements
      const delay = 0.1 + (index % 3) * 0.15; // Stagger by groups of
      if (element instanceof HTMLElement) {
        element.style.transitionDelay = `${delay}s`;
      }
      observer.observe(element);
    });
    
    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatedLeaves />
      <Hero />
      <ProductShowcase />
      <Benefits />
      <About />
      <Wholesale />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
