import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import ServicesPreview from '@/components/ServicesPreview'
import ProjectsPreview from '@/components/ProjectsPreview'
import Stats from '@/components/Stats'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import CTA from '@/components/CTA'
import TestimonialsSlider from '@/components/TestimonialsGrid'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <AboutPreview />
      <Stats />
      <ServicesPreview />
      {/* <ProjectsPreview /> */}
      {/* <TestimonialsPreview /> */}
      <TestimonialsSlider />
      <CTA />
    </div>
  )
}