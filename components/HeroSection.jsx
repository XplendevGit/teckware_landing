"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-[#111111] shadow-sm">
    <section className="text-white min-h-screen max flex items-center justify-evenly px-4 md:px-8 lg:px-16 xl:px-24 max-w-7xl mx-auto flex-col  xl:pt-0 md:flex-row md:text-start text-center pt-36 md:pt-20">
      <div className="relative z-10 mx-auto space-y-4 max-w-xl md:mr-20 mr-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Domina tu <span className="text-purple-400">Juego</span> con Tecnología Avanzada
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Lleva tu experiencia de gaming al siguiente nivel con los equipos más potentes del mercado.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center md:justify-start"
        >
          <Link href="#explore">
            <p className="bg-purple-600 px-5 py-2 rounded-full text-white font-medium hover:bg-purple-800 transition duration-300 cursor-pointer">
              Explora Ahora
            </p>
          </Link>
        </motion.div>
      </div>
      <div className="relative z-0 w-auto h-auto">
        <Image
          src="https://i.postimg.cc/qRx2NJzH/hero-a1-tw-Photo.png"
          alt="Hero Image"
          height={850}
          width={850}
          objectFit="cover"
          quality={100}
          className="opacity-100 h-[350px] w-[350px] md:w-auto md:h-auto"
          priority
        />
      </div>
    </section>
    </div>
  );
};

export default HeroSection;


