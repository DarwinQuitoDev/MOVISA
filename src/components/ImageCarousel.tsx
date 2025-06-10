import { useState, useEffect } from 'react';

const images = [
  '/src/assets/img/1.webp',
  '/src/assets/img/2.webp',
  '/src/assets/img/3.webp',
  '/src/assets/img/4.webp',
  '/src/assets/img/6.webp',
  '/src/assets/img/7.webp',
  '/src/assets/img/8.webp',
  '/src/assets/img/9.webp',
  '/src/assets/img/1.webp',
  '/src/assets/img/2.webp',
  '/src/assets/img/3.webp',
  '/src/assets/img/4.webp',
  '/src/assets/img/6.webp',
  '/src/assets/img/7.webp',
  '/src/assets/img/8.webp'
];

const CARDS_PER_SLIDE = 13;

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(images.length / CARDS_PER_SLIDE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (    <section className="py-12 bg-white">
      <div className="container mx-auto pt-12 px-4">
        <div className="overflow-hidden relative max-w-4xl mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalSlides * 100}%`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex justify-center gap-8 w-full flex-shrink-0">
                {images
                  .slice(
                    slideIndex * CARDS_PER_SLIDE,
                    (slideIndex + 1) * CARDS_PER_SLIDE
                  )
                  .map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="w-64 aspect-square"
                    >
                      <img
                        src={image}
                        alt={`Card ${slideIndex * CARDS_PER_SLIDE + imageIndex + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
