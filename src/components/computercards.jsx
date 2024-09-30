import React from 'react';
import Image from 'next/image';
import Sci from '../image/sci.png'; 
import Link from 'next/link';

const cardData = [
  {
    id: 1,
    img: Sci,
    title: "Computer Science Basic Quiz 1",
    category: "computer_science",
    link: '/quiz',
  },
  {
    id: 2,
    img: Sci,
    title: "Computer Science Basic Quiz 2",
    category: "computer_science",
    link: '/quiz',
  },
  {
    id: 3,
    img: Sci,
    title: "General Introduction Quiz 1",
    category: "computer_science",
    link: '/quiz',
  },
  {
    id: 4,
    img: Sci,
    title: "General Introduction Quiz 2",
    category: "computer_science",
    link: '/quiz',
  },
];

const ComputerCards = () => {
  return (
    <div className="bg-light py-5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {cardData.map((card) => (
            <Link 
              href={{ pathname: card.link, query: { category: card.category } }} 
              key={card.id}
            >
              <div className="bg-gray-500 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative">
                  <Image 
                    src={card.img} 
                    alt="Quiz" 
                    layout="responsive" 
                    width={500} 
                    height={300} 
                    className='cursor-pointer' 
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3 text-white">
                    <button className="bg-black px-3 py-1 rounded-md hover:bg-gray-900">10 Qs</button>
                    <button className="bg-black px-3 py-1 rounded-md hover:bg-gray-900">10 Plays</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-[Montserrat] text-center text-white">{card.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerCards;
