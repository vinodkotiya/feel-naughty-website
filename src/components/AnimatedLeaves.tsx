
import React from 'react';

const AnimatedLeaves = () => {
  return (
    <>
      {/* Left corner leaves */}
      <div className="fixed left-0 top-0 w-48 h-48 pointer-events-none z-10 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=200" 
          alt="" 
          className="absolute top-10 left-5 w-32 h-auto transform rotate-45 animate-float-slow"
          style={{animationDelay: "0.3s"}}
        />
        <img 
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=200" 
          alt="" 
          className="absolute top-20 left-16 w-24 h-auto transform -rotate-15 animate-float-slow" 
          style={{animationDelay: "0.7s"}}
        />
      </div>
      
      {/* Right corner leaves */}
      <div className="fixed right-0 bottom-0 w-48 h-48 pointer-events-none z-10 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=200" 
          alt="" 
          className="absolute bottom-10 right-5 w-32 h-auto transform -rotate-45 animate-float-slow" 
          style={{animationDelay: "0.5s"}}
        />
        <img 
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=200" 
          alt="" 
          className="absolute bottom-20 right-16 w-24 h-auto transform rotate-15 animate-float-slow" 
          style={{animationDelay: "0.2s"}}
        />
      </div>
    </>
  );
};

export default AnimatedLeaves;
