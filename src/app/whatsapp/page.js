'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const guitars = [
  {
    name: 'Fender Stratocaster',
    image: '/images/fender-strat.jpg',
    description: 'Perfect for rock and blues with a classic electric tone.',
  },
  {
    name: 'Yamaha F310',
    image: '/images/pexels-pixabay-164729.jpg',
    description: 'Great for beginners and casual acoustic players.',
  },
  {
    name: 'Gibson Vintage',
    image: '/images/pexels-pravesh-chaurasia-202563-3660866.jpg',
    description: 'Premium vintage tone for professionals and collectors.',
  },
  {
    name: 'Cort AD810',
    image: '/images/cort-ad810.jpg',
    description: 'Affordable dreadnought acoustic with great sound.',
  },
]

export default function WhatsAppPage() {
  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center justify-start bg-black bg-opacity-70 text-white relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        🎸 Your Perfect Guitar Matches!
      </h2>

      <div className="grid grid-cols-2 gap-4 md:gap-6 px-2 sm:px-4">

        {guitars.map((guitar, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{
    scale: 1.05,
    boxShadow: '0 0 15px #a0522d',
  }}
  transition={{
    delay: index * 0.2,
    duration: 0.4,
    type: 'spring',
  }}
  className="bg-[#8B4513] rounded-xl p-6 flex flex-col items-center text-center"
>

            <div className="w-full h-64 relative mb-4 overflow-hidden rounded-lg border-4 border-white">
              <Image
                src={guitar.image}
                alt={guitar.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{guitar.name}</h3>
            <p className="text-sm text-white mb-4">{guitar.description}</p>
            <a
              href={`https://wa.me/?text=I'm%20interested%20in%20the%20${encodeURIComponent(guitar.name)}%20guitar!`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition"
            >
              Enquiry on WhatsApp
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
