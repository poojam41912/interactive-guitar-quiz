'use client'

export default function WhatsAppCTA({ guitarName }) {
  const phone = '918088835392' // 🔁 Replace with your real number (include country code, no '+' sign)
  const message = `Hey! I'm interested in the ${guitarName} you matched me with.`

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl text-lg transition"
    >
      Order via WhatsApp
    </a>
  )
}
