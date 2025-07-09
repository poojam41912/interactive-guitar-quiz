'use client';
import Image from 'next/image';

const guitars = [
  {
    name: 'Fender Stratocaster',
    image: '/images/fender-strat.jpg',
    description: 'Perfect for rock and blues with a classic electric tone.',
  },
  {
    name: 'Ibanez RG Series',
    image: '/images/ibanez.jpg',
    description: 'High-performance guitar ideal for metal and shredding.',
  },
  {
    name: 'Yamaha F310',
    image: '/images/yamaha-f310.jpg',
    description: 'Reliable acoustic guitar great for beginners and practice.',
  },
  {
    name: 'Cort Electric Deluxe',
    image: '/images/cort-ad810.jpg',
    description: 'Affordable and quality build for intermediate players.',
  },
  {
    name: 'Martin D-28',
    image: '/images/martin.jpg',
    description: 'Legendary acoustic with powerful tone and projection.',
  },
  {
    name: 'PRS SE Custom',
    image: '/images/prs.jpg',
    description: 'Premium feel and versatile tone for all genres.',
  },
  {
    name: 'Techno SA',
    image: '/images/techno.jpg',
    description: 'Compact semi-acoustic with modern aesthetics.',
  },
  {
    name: 'Bromo Acoustic',
    image: '/images/bromo.jpg',
    description: 'Great value dreadnought with balanced sound.',
  },
  {
    name: 'Takamine G Series',
    image: '/images/takamine.jpg',
    description: 'Stage-ready acoustic-electric with bright tone.',
  },
  {
    name: 'Gibson Les Paul',
    image: '/images/gibson-vintage.jpg',
    description: 'Iconic electric guitar with rich sustain and tone.',
  },
];

export default function WhatsAppPage() {
  return (
    <div className="relative min-h-screen pt-16 pb-10 px-3 sm:px-6 md:px-12">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[-1]" />

      {/* Top Button */}
      <div className="flex justify-center mb-8">
        <a
          href={`https://wa.me/91XXXXXXXXXX?text=I'm%20interested%20in%20these%20guitars`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white text-sm sm:text-base px-6 py-4 rounded-full hover:bg-green-700 transition"
        >
          Contact Us to Know More
        </a>
      </div>

      {/* Heading */}
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
        🎸 Your Perfect Guitar Matches!
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-y-10 gap-x-4 sm:gap-6 px-2 sm:px-4">
        {guitars.map((guitar, index) => (
          <div
  key={index}
  className="bg-[#8B4513] rounded-xl shadow-md p-2 flex flex-col justify-start items-center text-center 
             aspect-[4/5] lg:aspect-auto lg:h-auto lg:max-w-[220px] w-full mx-auto"
>

            {/* Image */}
            <div className="w-full h-[140px] lg:h-[250px]">
  <Image
    src={guitar.image}
    alt={guitar.name}
    width={300}
    height={300}
    className="w-full h-full object-cover rounded border-2 border-white"
  />
</div>


            {/* Text */}
            <div className="flex flex-col h-[50%] px-2 py-1">
              <h3 className="text-white text-xs font-bold mb-1">{guitar.name}</h3>
              <p className="text-white text-[10px] leading-tight">{guitar.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center mt-10">
        <a
          href={`https://wa.me/91XXXXXXXXXX?text=I'm%20interested%20in%20these%20guitars`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white text-sm sm:text-base px-6 py-4 rounded-full hover:bg-green-700 transition"
        >
          Contact Us to Know More
        </a>
      </div>
    </div>
  );
}
