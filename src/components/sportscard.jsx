import React from 'react';
import Image from 'next/image';
import sport from '../image/sport.png';
import Link from 'next/link';

const cardData = [
    {
        id: 1,
        img: sport,
        title: "Cricket Challenge",
        category: "Sports",
        link: '/quiz',
    },
    {
        id: 2,
        img: sport,
        title: "Cricket Trivia",
        category: "Sports",
        link: '/quiz',
    },
    {
        id: 3,
        img: sport,
        title: "Cricket Knowledge Test",
        category: "Sports",
        link: '/quiz',
    },
    {
        id: 4,
        img: sport,
        title: "Cricket Quiz Game",
        category: "Sports",
        link: '/quiz',
    },
];

const Sportscard = () => {
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
                                        alt='Quiz' 
                                        layout="responsive" 
                                        width={500} 
                                        height={300} 
                                        className="object-cover cursor-pointer" 
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3 text-white">
                                        <button className="bg-black px-3 py-1 rounded-md hover:bg-gray-900">12 Qs</button>
                                        <button className="bg-black px-3 py-1 rounded-md hover:bg-gray-900">100 Plays</button>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-[Montserrat] text-center text-white">{card.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sportscard;
