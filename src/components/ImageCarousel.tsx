import { useState, useEffect } from 'react';

const images = [
  { src: '/src/assets/img/1.webp', alt: 'Profesional aplicando terapia física en MOVISA' },
  { src: '/src/assets/img/2.webp', alt: 'Sala de terapia equipada con tecnología moderna' },
  { src: '/src/assets/img/3.webp', alt: 'Sesión de rehabilitación deportiva personalizada' },
  { src: '/src/assets/img/4.webp', alt: 'Instalaciones modernas del centro MOVISA' },
  { src: '/src/assets/img/6.webp', alt: 'Equipo de fisioterapeutas profesionales' },
  { src: '/src/assets/img/7.webp', alt: 'Área de terapia neurológica especializada' },
  { src: '/src/assets/img/8.webp', alt: 'Ejercicios de rehabilitación guiados' },
  { src: '/src/assets/img/9.webp', alt: 'Terapia geriátrica personalizada' }
];

const CARDS_PER_SLIDE = 9;

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(images.length / CARDS_PER_SLIDE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto pt-12 px-2">
        <div className="overflow-hidden relative max-w-full mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalSlides * 100}%`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex justify-center gap-4 w-full flex-shrink-0 ">
                {images
                  .slice(
                    slideIndex * CARDS_PER_SLIDE,
                    (slideIndex + 1) * CARDS_PER_SLIDE
                  )
                  .map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="w-64 aspect-square hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
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
