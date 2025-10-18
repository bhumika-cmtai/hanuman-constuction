import { Metadata } from 'next'
import GalleryHero from '@/components/GalleryHero'
import GalleryFilter from '@/components/GalleryFilter'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Project Gallery - Hanuman Constructions | Construction Photos & Videos',
  description: 'Browse our construction project gallery featuring high-quality images and videos of our completed residential, commercial, industrial, and institutional projects.',
  keywords: 'construction gallery, project photos, building images, construction videos, portfolio gallery, project showcase, Raipur construction',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <GalleryHero />
      <GalleryFilter />
      <GalleryGrid />
    </div>
  )
}
