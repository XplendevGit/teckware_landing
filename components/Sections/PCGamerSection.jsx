// components/PCGamerSection.js

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Array de PCs Gamer
const pcs = [
  {
    image: 'https://i.postimg.cc/j2RYBrLH/prueba-a-Photoroom.png', // Imagen del PC
    name: 'PC Gamer Model 1', // Nombre del PC
    specs: [  // Especificaciones del PC
      '16GB RAM', 
      '1TB SSD', 
      'NVIDIA RTX 3070', 
      'MSI B450', 
      'Fuente de Poder 750W'
    ], 
    link: '/productos/pc-gamer-modelo-1' // Enlace a la página o conversación de WhatsApp
  },
  {
    image: 'https://i.postimg.cc/Fzw8N5KC/pcprueba-Photoroom.png', 
    name: 'PC Gamer Model 2',
    specs: [
      '32GB RAM', 
      '2TB SSD', 
      'NVIDIA RTX 3080', 
      'ASUS Z490', 
      'Fuente de Poder 1000W'
    ], 
    link: '/productos/pc-gamer-modelo-2'
  },
];

const PCGamerSection = () => {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Equipos Gamer Disponibles
        </motion.h2>

        {/* Si no hay PCs disponibles */}
        {pcs.length === 0 ? (
          <div className="text-center text-white text-lg">
            <p>No hay PCs disponibles por el momento, ¡vuelvan pronto!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {pcs.map((pc, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  {/* Imagen del PC */}
                  <div className="w-1/3">
                    <Image
                      src={pc.image}
                      alt={pc.name}
                      width={200} // Ajusta el tamaño según necesites
                      height={200} // Ajusta el tamaño según necesites
                      className="object-cover rounded-md"
                    />
                  </div>
                  {/* Nombre del PC y características */}
                  <div className="ml-4 w-2/3">
                    <h3 className="text-xl font-semibold text-black mb-2">{pc.name}</h3>
                    <ul className="text-gray-600 text-sm mb-4">
                      {pc.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="mb-1">{spec}</li>
                      ))}
                    </ul>
                    <Link href={pc.link}>
                      <p className="block text-center px-6 py-2 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all">
                        Conocer más
                      </p>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PCGamerSection;
