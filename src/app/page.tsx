import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import ServicesPreview from '@/components/ServicesPreview'
import ProjectsPreview from '@/components/ProjectsPreview'
import Stats from '@/components/Stats'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutPreview />
      <Stats />
      <ServicesPreview />
      <ProjectsPreview />
      <TestimonialsPreview />
      <CTA />
    </div>
  )
}