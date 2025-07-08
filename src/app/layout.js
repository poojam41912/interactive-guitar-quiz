import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'Interactive Guitar Match Quiz',
  description: 'Find your perfect guitar and order via WhatsApp!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-black font-sans flex flex-col">
        
        {/* HEADER */}
        <header className="bg-white py-6 px-6 shadow flex items-center justify-center relative">
          {/* Centered Logo */}
          <div className="flex justify-center">
            <Image
              src="/images/logo-original.png"
              alt="Guitar Match Logo"
              width={150}
              height={150}
              className="rounded"
              priority
            />
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow bg-guitar bg-cover bg-center bg-no-repeat">
          <div className="bg-black/80 min-h-full px-4 py-10 text-white">
            {children}
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-white text-center text-black font-bold py-4">
          © 2025 Music House. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
