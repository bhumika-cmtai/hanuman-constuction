import { Metadata } from 'next'
import ProjectsHero from '@/components/ProjectsHero'
import ProjectsFilter from '@/components/ProjectsFilter'
import ProjectsGrid from '@/components/ProjectsGrid'
import ProjectsCTA from '@/components/ProjectsCTA'

export const metadata: Metadata = {
  title: 'Our Projects - Hanuman Constructions | Portfolio & Case Studies',
  description: 'Explore our portfolio of successful construction projects including residential, commercial, industrial, and institutional buildings. View project details, images, and client testimonials.',
  keywords: 'construction projects, portfolio, residential projects, commercial projects, industrial projects, case studies, construction gallery, Raipur projects',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsFilter />
      {/* <ProjectsGrid /> */}
      <ProjectsCTA />
    </div>
  )
}
