import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const slides = [
    "Not sure what to cook tonight?",
    "Finding it hard to plan your meals?",
    "Got last-minute plans and no time to cook?",
    "Need a creative spark?",
    "Craving a new recipe to try?",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full flex-col h-10 text-center md:h-10 overflow-hidden">
      <ul className="absolute w-full flex flex-col transition-all duration-500">
        {slides.map((slide, index) => (
          <li
            key={index}
            style={{
              transform: `translateY(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
            className="h-16 md:h-20 "
          >
            <h1 className="text-xl md:text-3xl text-yellow-300 font-bold">
              {slide}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
