import React from 'react'
import Image from 'next/image';
import data from '../image/data.png'
import Link from 'next/link';

const cardData = [
    {
        id: 1,
        img: data,
        title: "Data Science Quiz",
        category: "DataScience",
        link:'/quiz',
    },
    {
        id: 2,
        img: data,
        title: "Quiz on Data Science",
        category: "DataScience",
        link:'/quiz',
    },
    {
        id: 3,
        img: data,
        title: "Data Science Knowledge Challenge",
        category: "DataScience",
        link:'/quiz',
    },
    {
        id: 4,
        img: data,
        title: "Explore your Data Science Knowledge",
        category: "DataScience",
        link:'/quiz',
    },
    ];
    

const Datasciencecard = () => {
    return (
        <div className="bg-light py-5">
        <div className="container mx-auto ml-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {cardData.map((card) => (
                <Link href={{ pathname: card.link, query: { category: card.category } }} key={card.id}>
                <div key={card.id} className="bg-gray-500 shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <Image src={card.img} alt='Quiz' className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"/>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3 text-white">
                    <button className="bg-black px-3 py-1 rounded-md hover:bg-gray-900">10 Qs</button>
                    <button className="bg-black px-3 py-1 rounded-md hover:bg-gray-900">10 Plays</button>
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

export default Datasciencecard
