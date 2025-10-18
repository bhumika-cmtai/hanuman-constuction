import { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import ContactMap from '@/components/ContactMap'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Contact Us - Hanuman Constructions | Get Free Quote & Consultation',
  description: 'Contact Hanuman Constructions for your construction needs. Get free consultation, project quotes, and expert advice. Located in Raipur, Chhattisgarh.',
  keywords: 'contact hanuman constructions, construction quote, free consultation, construction company raipur, contact construction company, get quote',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactCTA />
    </div>
  )
}
