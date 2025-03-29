import React from 'react';
import PCGamer from './PCGamerSection';

const PCGamerPage = () => {
  // Definición del array de PCs (puedes cargar estos datos de una API o base de datos)
  const pcs = [
    {
      image: 'https://i.postimg.cc/qkX2NhJ/herocb.jpg',
      name: 'PC Gamer - Model 1',
      specs: ['16GB RAM', '1TB SSD', 'NVIDIA RTX 3070', 'MSI B450', '750W PSU'],
      link: 'https://wa.me/1234567890?text=Quiero+más+información+sobre+PC+Gamer+Model+1',
    },
    {
      image: 'https://i.postimg.cc/Fz8N8SK/pcpprueba-Photoroop.png',
      name: 'PC Gamer - Model 2',
      specs: ['32GB RAM', '2TB SSD', 'NVIDIA RTX 3080', 'ASUS Z490', '850W PSU'],
      link: 'https://wa.me/1234567890?text=Quiero+más+información+sobre+PC+Gamer+Model+2',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">PCs Gamer Disponibles</h1>

      {/* Validación sin utilizar .length */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pcs.map((pc, index) => (
            <PCGamer
              key={index}
              image={pc.image}
              name={pc.name}
              specs={pc.specs}
              link={pc.link}
            />
          ))}
        </div>
    </div>
  );
};

export default PCGamerPage;
