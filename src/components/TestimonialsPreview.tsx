'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsPreview() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Business Owner",
      company: "Kumar Industries",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "Hanuman Constructions delivered our industrial facility ahead of schedule and within budget. Their attention to detail and quality of work is exceptional. Highly recommended for any construction project.",
      project: "Industrial Manufacturing Unit"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Homeowner",
      company: "Residential Client",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "We built our dream home with Hanuman Constructions. The team was professional, transparent, and always kept us informed about the progress. The final result exceeded our expectations.",
      project: "Luxury Residential Villa"
    },
    {
      id: 3,
      name: "Dr. Amit Verma",
      position: "Director",
      company: "Verma Educational Trust",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "The school building project was completed with utmost precision and quality. Hanuman Constructions understood our requirements perfectly and delivered a world-class educational facility.",
      project: "Educational Institution Campus"
    },
    {
      id: 4,
      name: "Sunita Patel",
      position: "Property Developer",
      company: "Patel Developers",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "We have been working with Hanuman Constructions for multiple projects. Their reliability, quality of work, and customer service are outstanding. They are our go-to construction partner.",
      project: "Commercial Office Complex"
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Factory Manager",
      company: "Singh Manufacturing",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "The warehouse construction was completed on time despite challenging weather conditions. The team's dedication and problem-solving skills are commendable. Excellent work!",
      project: "Industrial Warehouse"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Quote className="h-12 w-12 text-orange-600 opacity-50" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed">
                &quot;{current.content}&quot;
              </blockquote>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {current.name}
                </h4>
                <p className="text-orange-600 font-medium mb-1">
                  {current.position}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {current.company}
                </p>
                <p className="text-orange-500 text-sm font-medium">
                  Project: {current.project}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors duration-200 group"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors duration-200 group"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-orange-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-orange-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  )
}
