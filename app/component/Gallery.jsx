"use client"; // if you're in Next.js app router

import { useState, useEffect } from "react";

export default function Gallery() {
  const images = [
    {
      src: "/img/pizza-is-being-baked-wood-fired-oven_24640-81741.jpg",
      alt: "Pizza Making",
    },
    {
      src: "/img/delicious-pizza-with-lots-filling-wooden-table_496782-79.jpg",
      alt: "Cheesy Pizza",
    },
    {
      src: "/img/chef-kitchen-prepares-pizza_1157-21841.jpg",
      alt: "Wood Fired Oven",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="py-6 bg-blue-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🍕 Our <span className="text-red-600">Gallery</span>
        </h2>

        {/* Carousel */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-red-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
