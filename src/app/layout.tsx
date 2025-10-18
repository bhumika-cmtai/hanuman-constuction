import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hanuman Constructions - Building Excellence Since Day One',
  description: 'Hanuman Constructions delivers high-quality, reliable, and innovative construction solutions. From residential to commercial projects, we build with purpose, trust, and excellence.',
  keywords: 'construction, building, civil engineering, residential, commercial, industrial, construction company, Raipur, Chhattisgarh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}