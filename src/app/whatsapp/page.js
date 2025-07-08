'use client';
import Image from 'next/image';

const guitars = [
  {
    name: 'Fender Stratocaster',
    image: '/images/fender-strat.jpg',
    description: 'Versatile tone for blues and rock genres.',
  },
  {
    name: 'Ibanez RG Series',
    image: '/images/ibanez.jpg',
    description: 'Ideal for shredders with sleek design.',
  },
  {
    name: 'Yamaha F310',
    image: '/images/yamaha-f310.jpg',
    description: 'Beginner-friendly acoustic with clear sound.',
  },
  {
    name: 'Cort Electric Deluxe',
    image: '/images/cort-ad810.jpg',
    description: 'Stylish electric guitar with crisp tones.',
  },
  {
    name: 'Martin LX1E',
    image: '/images/martin.jpg',
    description: 'Premium compact guitar with rich tone.',
  },
  {
    name: 'PRS Custom 24',
    image: '/images/prs.jpg',
    description: 'Elegant electric with versatile pickups.',
  },
  {
    name: 'Techno SA',
    image: '/images/techno.jpg',
    description: 'Perfect mix of electric and acoustic features.',
  },
  {
    name: 'Bromo Sunburst',
    image: '/images/bromo.jpg',
    description: 'Striking looks with balanced acoustic tone.',
  },
  {
    name: 'Takamine D Series',
    image: '/images/takamine.jpg',
    description: 'Reliable for live performance and studio.',
  },
  {
    name: 'Gibson Les Paul',
    image: '/images/gibson-vintage.jpg',
    description: 'Legendary electric guitar for classic rock tones.',
  },
];

export default function WhatsAppPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-10 px-3 sm:px-6 md:px-12">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[-1]" />

      {/* Title */}
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
        🎸 Your Perfect Guitar Matches!
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-y-12 gap-x-4 sm:gap-6 px-1 sm:px-4">
        {guitars.map((guitar, index) => (
          <div
            key={index}
            className="aspect-[4/5] bg-[#8B4513] rounded-xl shadow-md p-2 flex flex-col justify-between items-center text-center"
          >
            {/* Image */}
            <div className="w-full h-[100%]">
              <Image
                src={guitar.image}
                alt={guitar.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded border-4 border-white"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between h-[50%] px-1 py-1">
              <h3 className="text-white text-xs font-bold leading-snug">{guitar.name}</h3>
              <p className="text-white text-[10px] leading-tight mt-1 mb-1">{guitar.description}</p>
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=I'm%20interested%20in%20the%20${encodeURIComponent(guitar.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-green-600 text-white text-[10px] px-2 py-[4px] rounded-full hover:bg-green-700 transition"
              >
                Enquiry on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
