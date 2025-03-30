// components/TestimonialsSection.js

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick'; // Importamos react-slick para el slider

// Array de testimonios
const testimonials = [
  {
    name: 'Yaron Levi',
    position: 'Chief Architect at YouTiti',
    testimonial:
      'There are two key points that make Logtail a game-changer. One is price. The other is ClickHouse.',
    image: 'https://i.postimg.cc/13GNRn4m/LOGO-TECKWARE.png', // Cambia esta imagen por la real
  },
  {
    name: 'Robert Lacok',
    position: 'PM at Deepnote',
    testimonial:
      "We've been using Logtail for a while now, and the speed is mindblowing!",
    image: 'https://i.postimg.cc/13GNRn4m/LOGO-TECKWARE.png', // Cambia esta imagen por la real
  },
  {
    name: 'Connor Stevens',
    position: 'Software Engineer at Hyper',
    testimonial:
      'Logtail is one of the best products I’ve ever used. Went from 0-100 on logging in 15 minutes. Incredible.',
    image: 'https://i.postimg.cc/13GNRn4m/LOGO-TECKWARE.png', // Cambia esta imagen por la real
  },
  {
    name: 'Connor Stevens',
    position: 'Software Engineer at Hyper',
    testimonial:
      'Logtail is one of the best products I’ve ever used. Went from 0-100 on logging in 15 minutes. Incredible.',
    image: 'https://i.postimg.cc/13GNRn4m/LOGO-TECKWARE.png', // Cambia esta imagen por la real
  },
  {
    name: 'Connor Stevens',
    position: 'Software Engineer at Hyper',
    testimonial:
      'Logtail is one of the best products I’ve ever used. Went from 0-100 on logging in 15 minutes. Incredible.',
    image: 'https://i.postimg.cc/13GNRn4m/LOGO-TECKWARE.png', // Cambia esta imagen por la real
  },
];

const TestimonialsSection = () => {
  const settings = {
    dots: false,  // Desactivar los puntos de navegación
    centerPadding: "60px",
    centerMode: true,  // Activar el modo centrado
    infinite: true,  // Desplazamiento infinito
    speed: 500,  // Velocidad del deslizamiento
    slidesToShow: 3,  // Mostrar 3 testimonios a la vez
    slidesToScroll: 1,  // Desplazamiento de 1 a la vez
    arrows: true,  // Mostrar las flechas de navegación
    autoplay: true,  // Activar el desplazamiento automático
    autoplaySpeed: 1500,  // Velocidad del desplazamiento automático
    cssEase: 'linear',  // Efecto de desplazamiento
    pauseOnHover: true,  // Pausar el desplazamiento automático al pasar el mouse
    margin: "27px",
    gap: "1rem",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // 2 testimonios para pantallas medianas
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // 1 testimonio para pantallas pequeñas
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#111111] text-purple py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Testimonios de Nuestros <span className="text-[#9B4DE2]">Clientes</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lo que dicen nuestros clientes sobre Teckware y nuestros servicios ofrecidos.
        </motion.p>

        {/* Slider de Testimonios */}
        <div className="relative slick-slider w-full p-6">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#333333] hover:bg-[#9B4DE2] text-white p-6 gap-6 rounded-lg shadow-lg flex items-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <p className="text-xl mb-4">“{testimonial.testimonial}”</p>
                <div className="flex items-center justify-start space-x-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
