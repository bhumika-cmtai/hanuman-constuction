import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import Stats from '@/components/Stats'

export default function SimplePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutPreview />
      <Stats />
    </div>
  )
}