// components/GallerySection.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Datos de los trabajos
const galleryItems = [
  { image: 'https://i.postimg.cc/fb6jkrLN/trabajos-demo-1.webp', title: 'Trabajo 1', link: '/trabajos/1' },
  { image: 'https://i.postimg.cc/RhC307cm/trabajos-demo-2.webp', title: 'Trabajo 2', link: '/trabajos/2' },
  { image: 'https://i.postimg.cc/HxvmQXqd/trabajos-demo-3.webp', title: 'Trabajo 3', link: '/trabajos/3' },
  { image: 'https://i.postimg.cc/vZ7d0pJP/trabajos-demo-4.webp', title: 'Trabajo 4', link: '/trabajos/4' },
  { image: 'https://i.postimg.cc/zGd1mnfW/trabajos-demo-5.webp', title: 'Trabajo 5', link: '/trabajos/5' },
  { image: 'https://i.postimg.cc/jdZ1CRrY/trabajos-demo-6.webp', title: 'Trabajo 6', link: '/trabajos/6' },
];

const GallerySection = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Actualiza el tamaño de la ventana para saber si es móvil o no
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Establecer el tamaño inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determinar cuántos trabajos mostrar según el tamaño de la ventana
  const itemsToShow = windowWidth <= 1024 ? 3 : galleryItems.length; // Mostrar 3 en pantallas pequeñas, todos en pantallas grandes

  return (
    <section className="bg-[#111111] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <motion.h2
          className="text-3xl font-bold text-white text-left mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Últimos Trabajos de <span className="text-[#3AAFFE]">TeckWare</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nuestra galería de trabajos recientes realizados para los clientes que prefieren TeckWare.
        </motion.p>

        {/* Galería de imágenes */}
        <div className="flex flex-wrap justify-center gap-6">
          {galleryItems.slice(0, itemsToShow).map((item, index) => (
            <motion.div
              key={index}
              className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <a href={item.link}>
                <div className="w-full h-72 relative overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Botón "Ver todos los trabajos" */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/todos-los-trabajos"
            className="bg-purple-900 px-6 py-4 rounded-full hover:text-white font-bold hover:bg-purple-600 transition duration-300 cursor-pointer"
          >
            Ver todos los trabajos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
