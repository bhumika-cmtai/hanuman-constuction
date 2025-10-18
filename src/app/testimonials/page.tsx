import { Metadata } from 'next'
import TestimonialsHero from '@/components/TestimonialsHero'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import TestimonialsStats from '@/components/TestimonialsStats'
import TestimonialsCTA from '@/components/TestimonialsCTA'

export const metadata: Metadata = {
  title: 'Client Testimonials - Hanuman Constructions | Reviews & Feedback',
  description: 'Read what our satisfied clients say about our construction services. Real testimonials, reviews, and feedback from residential, commercial, and industrial project clients.',
  keywords: 'client testimonials, construction reviews, customer feedback, client satisfaction, project reviews, construction company reviews, Raipur construction',
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <TestimonialsHero />
      <TestimonialsStats />
      <TestimonialsGrid />
      <TestimonialsCTA />
    </div>
  )
}
