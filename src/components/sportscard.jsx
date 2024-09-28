import React from 'react'
import Image from 'next/image';
import sport from '../image/sport.png'

const cardData = [
    {
        id: 1,
        img: sport,
        title: "Cricket Challenge",
    },
    {
        id: 2,
        img: sport,
        title: "Cricket Trivia",
    },
    {
        id: 3,
        img: sport,
        title: "Cricket Knowledge Test",
    },
    {
        id: 4,
        img: sport,
        title: "Cricket Quiz Game",
    },
    ];
    

const Sportscard = () => {
    return (
        <div className="bg-light py-5">
        <div className="container mx-auto ml-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {cardData.map((sport) => (
                <div key={sport.id} className="bg-gray-500 shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <Image src={sport.img} alt='Quiz' className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3 text-white">
                    <button className="bg-black px-3 py-1 rounded-md hover:bg-gray-900">12 Qs</button>
                    <button className="bg-black px-3 py-1 rounded-md hover:bg-gray-900">100 Plays</button>
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-lg font-[Montserrat] text-center text-white">{sport.title}</h3>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}

export default Sportscard
