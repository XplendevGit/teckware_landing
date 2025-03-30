"use client"
import Header from "@/components/Header";
import Portada from "@/components/Sections/Portada";
import PCGamerSection from "@/components/Sections/PCGamerSection";
import Services from "@/components/Sections/Services";
import TestimonialsSection from "@/components/Sections/TestimonialSection";
import GallerySection from "@/components/Sections/GallerySection";
import Image from "next/image";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <>
    <Header id="header">

    </Header>

    <Portada id="main">

    </Portada>

    <PCGamerSection id="hero">

    </PCGamerSection>

    <Services id="services">

    </Services>

    <TestimonialsSection id="testimonials">
      
    </TestimonialsSection>

    <GallerySection id="gallery">
      
    </GallerySection>

    </>
  );
}
