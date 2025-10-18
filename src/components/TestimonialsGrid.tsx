'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Calendar, MapPin, Building2, Home, Factory, School } from 'lucide-react'

export default function TestimonialsGrid() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Business Owner",
      company: "Kumar Industries",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "Hanuman Constructions delivered our industrial facility ahead of schedule and within budget. Their attention to detail and quality of work is exceptional. The team was professional, transparent, and always kept us informed about the progress. Highly recommended for any construction project.",
      project: "Industrial Manufacturing Unit",
      projectType: "Industrial",
      location: "Bilaspur, C.G.",
      year: "2023",
      duration: "18 months",
      budget: "₹5 Crores",
      icon: Factory,
      features: ["Large Scale", "Advanced Systems", "Safety Compliant", "Efficient Layout"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Homeowner",
      company: "Residential Client",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "We built our dream home with Hanuman Constructions. The team was professional, transparent, and always kept us informed about the progress. The final result exceeded our expectations. The quality of work and attention to detail is outstanding.",
      project: "Luxury Residential Villa",
      projectType: "Residential",
      location: "Naya Raipur, C.G.",
      year: "2024",
      duration: "12 months",
      budget: "₹2 Crores",
      icon: Home,
      features: ["Luxury Finishes", "Private Amenities", "Premium Location", "Custom Design"]
    },
    {
      id: 3,
      name: "Dr. Amit Verma",
      position: "Director",
      company: "Verma Educational Trust",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "The school building project was completed with utmost precision and quality. Hanuman Constructions understood our requirements perfectly and delivered a world-class educational facility. The team's expertise and dedication are commendable.",
      project: "Educational Institution Campus",
      projectType: "Institutional",
      location: "Durg, C.G.",
      year: "2023",
      duration: "20 months",
      budget: "₹3 Crores",
      icon: School,
      features: ["Modern Classrooms", "Laboratories", "Sports Facilities", "Library"]
    },
    {
      id: 4,
      name: "Sunita Patel",
      position: "Property Developer",
      company: "Patel Developers",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "We have been working with Hanuman Constructions for multiple projects. Their reliability, quality of work, and customer service are outstanding. They are our go-to construction partner for all our development projects.",
      project: "Commercial Office Complex",
      projectType: "Commercial",
      location: "Bhilai, C.G.",
      year: "2024",
      duration: "24 months",
      budget: "₹8 Crores",
      icon: Building2,
      features: ["15 Floors", "Energy Efficient", "Modern Facilities", "Prime Location"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Factory Manager",
      company: "Singh Manufacturing",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "The warehouse construction was completed on time despite challenging weather conditions. The team's dedication and problem-solving skills are commendable. The quality of work is excellent and the project was delivered within budget.",
      project: "Industrial Warehouse",
      projectType: "Industrial",
      location: "Korba, C.G.",
      year: "2024",
      duration: "15 months",
      budget: "₹4 Crores",
      icon: Factory,
      features: ["Modern Storage", "Logistics Facilities", "Loading Docks", "Security Systems"]
    },
    {
      id: 6,
      name: "Anita Desai",
      position: "Hospital Administrator",
      company: "City Hospital",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content: "The hospital construction project was handled with great care and attention to detail. The team understood the specific requirements of a healthcare facility and delivered exceptional results. We are very satisfied with their work.",
      project: "Hospital Complex",
      projectType: "Institutional",
      location: "Raipur, C.G.",
      year: "2023",
      duration: "32 months",
      budget: "₹12 Crores",
      icon: School,
      features: ["Modern Facilities", "Patient Care", "Emergency Services", "Specialized Units"]
    }
  ]

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
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our satisfied clients have to say about our construction services and project delivery
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Quote className="h-12 w-12 text-orange-600 opacity-50" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed">
                "{current.content}"
              </blockquote>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                  {current.name}
                </h4>
                <p className="text-orange-600 font-medium mb-2">
                  {current.position}
                </p>
                <p className="text-gray-600 mb-4">
                  {current.company}
                </p>
              </div>

              {/* Project Details */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <current.icon className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <h5 className="text-lg font-semibold text-gray-900 text-center mb-4">
                  Project: {current.project}
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <div className="text-gray-500">Type</div>
                    <div className="font-semibold text-gray-900">{current.projectType}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Location</div>
                    <div className="font-semibold text-gray-900">{current.location}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{current.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Budget</div>
                    <div className="font-semibold text-gray-900">{current.budget}</div>
                  </div>
                </div>
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
        <div className="flex justify-center mb-16 space-x-2">
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

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                "{testimonial.content.substring(0, 150)}..."
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Building2 className="h-4 w-4" />
                  <span>{testimonial.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
