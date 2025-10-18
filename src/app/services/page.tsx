import { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import DetailedServices from '@/components/DetailedServices'
import ServiceProcess from '@/components/ServiceProcess'
import ServiceCTA from '@/components/ServiceCTA'

export const metadata: Metadata = {
  title: 'Our Services - Hanuman Constructions | Complete Construction Solutions',
  description: 'Comprehensive construction services including residential, commercial, industrial projects, MEP services, interior design, and project management. Quality construction solutions in Raipur.',
  keywords: 'construction services, residential construction, commercial construction, industrial construction, MEP services, interior design, project management, Raipur construction',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <DetailedServices />
      <ServiceProcess />
      <ServiceCTA />
    </div>
  )
}
