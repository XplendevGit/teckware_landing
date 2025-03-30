// components/ServicesPage.js

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Array de servicios de TeckWare
const services = [
  {
    title: 'Armado de PCs Gamer',
    category: 'Servicio Personalizado',
    description: 'Te ofrecemos el mejor armado de PCs Gamer, personalizados a tus necesidades y con componentes de alto rendimiento.',
    icon: 'https://i.postimg.cc/DyHBGc2v/phoenixpro-1-Photoroom.png',
    link: '/servicios/armado-pc',
  },
  {
    title: 'Mantenimiento Preventivo',
    category: 'Mantenimiento Regular',
    description: 'Mantén tu equipo en óptimas condiciones con nuestro servicio de mantenimiento preventivo de PC y consolas.',
    icon: 'https://i.postimg.cc/DyHBGc2v/phoenixpro-1-Photoroom.png',
    link: '/servicios/mantenimiento',
  },
  {
    title: 'Venta de Componentes',
    category: 'Venta Directa',
    description: 'Conoce nuestra variedad de componentes para PCs y consolas, adecuados para tus necesidades.',
    icon: 'https://i.postimg.cc/DyHBGc2v/phoenixpro-1-Photoroom.png',
    link: '/servicios/venta-componentes',
  },
];

const Services = () => {
  return (
    <section className="bg-[#111111] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Servicios de <span className="text-[#9B4DE2]">TeckWare</span>
        </motion.h2>
        <motion.h3
          className="text-lg font-semibold text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Conoce nuestros servicios especializados para gamers y profesionales.
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#262829] hover:bg-[#9B4DE2] p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 w-full sm:w-1/2 md:w-1/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Link href={service.link}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={150}
                    height={150}
                    className="object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{service.category}</p>
                  <p className="text-gray-300 text-md">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
