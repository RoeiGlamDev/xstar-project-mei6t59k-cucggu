import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GlamCS',
  description: 'Experience luxury cosmetics with GlamCS - where beauty meets elegance.',
  keywords: ['cosmetics', 'GlamCS', 'luxury', 'beauty', 'modern'],
  authors: [{ name: 'GlamCS' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-white text-gray-800 min-h-screen antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-orange-500 to-orange-300">
          {children}
        </div>
      </body>
    </html>
  )
}