// components/PCGamerSection.js

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Array de PCs Gamer
const pcs = [
  {
    image: 'https://i.postimg.cc/8zYfyy73/Leviathan-1-Photoroom.png', // Imagen del PC
    name: 'Leviathan', // Nombre del PC
    specs: [  // Especificaciones del PC
      '16GB RAM', 
      '1TB SSD', 
      'NVIDIA RTX 3070', 
      'MSI B450', 
      'Fuente de Poder 750W'
    ], 
    link: 'https://wa.link/ebyzyu' // Enlace a la página o conversación de WhatsApp
  },
  {
    image: 'https://i.postimg.cc/HnfswNZ4/krakenv2-2-Photoroom.png', 
    name: 'Kraken V2',
    specs: [
      '32GB RAM', 
      '2TB SSD', 
      'NVIDIA RTX 3080', 
      'ASUS Z490', 
      'Fuente de Poder 1000W'
    ], 
    link: 'https://wa.link/fdbgb2'
  },
  {
    image: 'https://i.postimg.cc/Gtr1b15f/titanx-1-Photoroom.png', // URL de la nueva imagen del PC
    name: 'Titan X', // Nombre del nuevo PC
    specs: [
      '64GB RAM', 
      '4TB SSD', 
      'NVIDIA RTX 3090', 
      'MSI Z590', 
      'Fuente de Poder 1500W'
    ], 
    link: 'https://wa.link/8ez5uu' // Enlace del producto
  },
  {
    image: 'https://i.postimg.cc/DyHBGc2v/phoenixpro-1-Photoroom.png', // URL de la nueva imagen del PC
    name: 'Phoenix Pro', // Nombre del nuevo PC
    specs: [
      '64GB RAM', 
      '3TB SSD', 
      'NVIDIA RTX 3080 Ti', 
      'Gigabyte Z590', 
      'Fuente de Poder 1200W'
    ], 
    link: 'https://wa.link/vbg8v0' // Enlace del producto
  }
];

const PCGamerSection = () => {
  return (
    <section className="bg-[#111111] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Equipos Gamer <span className="text-[#3AAFFE]">Disponibles</span>
        </motion.h2>
        <motion.h3
           className="text-lg text-gray-300 mb-8"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.2 }}
          >
              Explora a detalle nuestra gama de equipos profesionales.
         </motion.h3>

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
                className="bg-[#262829] p-6 rounded-lg shadow-lg transform transition-all border-[2px] border-[#121315] hover:border-[#9B4DE2]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <div className="flex flex-col items-center mb-4 mx-auto">
                  {/* Imagen del PC */}
                  <div className="w-full h-[300px] min-w-[300px] max-h-[300px] relative">
                    <Image
                      src={pc.image}
                      alt={pc.name}
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="rounded-md mx-auto w-auto min-w-[300px] h-[300px] max-h-[300px]"
                    />
                  </div>

                  {/* Nombre del PC y características */}
                  <div className="w-full text-center md:pt-0">
                    <h3 className="text-xl font-semibold text-[#3AAFFE] mb-2">{pc.name}</h3>
                    <ul className="text-white text-sm mb-4">
                      {pc.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="mb-1">{spec}</li>
                      ))}
                    </ul>

                    {/* Botón de "Conocer más" */}
                    <Link href={pc.link}>
                      <p className="block text-center px-6 py-2 bg-purple-800 text-white font-bold rounded-full hover:bg-purple-600 duration-300 cursor-pointer transition-all">
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
