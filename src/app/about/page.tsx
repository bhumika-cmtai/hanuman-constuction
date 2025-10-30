import { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import CompanyProfile from '@/components/CompanyProfile'
import VisionMission from '@/components/VisionMission'
import TeamSection from '@/components/TeamSection'
import ValuesSection from '@/components/ValuesSection'
import WhyChooseUs from '@/components/WhyChooseUs'

export const metadata: Metadata = {
  title: 'About Us - Hanuman Constructions | Company Profile, Vision & Mission',
  description: 'Learn about Hanuman Constructions - our company profile, vision, mission, and values. Discover why we are the trusted construction partner for quality and excellence.',
  keywords: 'about hanuman constructions, company profile, vision mission, construction company raipur, team, values',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyProfile />
      <VisionMission />
      <ValuesSection />
      {/* <TeamSection /> */}
      <WhyChooseUs />
    </div>
  )
}
