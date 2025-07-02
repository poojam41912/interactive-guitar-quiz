'use client'

import Image from 'next/image'
import WhatsAppCTA from './WhatsAppCTA'
import getGuitarMatch from '@/utils/matchLogic'

export default function ResultCard({ answers }) {
  const result = getGuitarMatch(answers)

  return (
    <div className="text-center p-6 rounded-xl bg-gray-900 shadow-2xl">
      <h2 className="text-3xl font-bold mb-4 text-white">Your Perfect Match:</h2>

      {/* Guitar Image */}
      <Image
        src={`/guitars/${result.image}`}
        alt={result.name}
        width={300}
        height={200}
        className="mx-auto rounded-lg mb-4"
      />

      {/* Description */}
      <p className="text-lg text-white mb-6">{result.description}</p>

      {/* WhatsApp Button */}
      <WhatsAppCTA guitarName={result.name} />
    </div>
  )
}
