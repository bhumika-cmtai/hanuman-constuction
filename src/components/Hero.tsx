'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, Play, Award, Users, Clock, Shield } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Building Excellence Since Day One",
      subtitle: "Hanuman Constructions",
      description: "Delivering high-quality, reliable, and innovative construction solutions that meet the evolving needs of our clients.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Explore Our Services"
    },
    {
      title: "Innovation Meets Craftsmanship",
      subtitle: "Modern Construction Solutions",
      description: "From residential to commercial projects, we combine cutting-edge technology with traditional craftsmanship.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      cta: "View Our Projects"
    },
    {
      title: "Your Vision, Our Mission",
      subtitle: "Trusted Construction Partner",
      description: "Building with purpose, not just structures, but trust, growth, and long-term relationships.",
      image: "https://images.unsplash.com/photo-1590725140246-20acdee442be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Get Free Quote"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const features = [
    { icon: Award, text: "Quality Assured" },
    { icon: Users, text: "Expert Team" },
    { icon: Clock, text: "On-Time Delivery" },
    { icon: Shield, text: "Licensed & Insured" }
  ]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="text-white space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg sm:text-xl text-orange-400 font-semibold">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-lg">
                  {slides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 group text-sm sm:text-base"
                >
                  {slides[currentSlide].cta}
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 group text-sm sm:text-base">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Watch Our Story</span>
                  <span className="sm:hidden">Watch</span>
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400 flex-shrink-0" />
                    <span className="text-white font-medium text-sm sm:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image/Visual Content */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20 p-8">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto flex items-center justify-center">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">25+ Years Experience</h3>
                    <p className="text-gray-200">
                      Delivering exceptional construction services with unmatched quality and reliability
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-orange-400">500+</div>
                        <div className="text-sm text-gray-300">Projects Completed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-400">100%</div>
                        <div className="text-sm text-gray-300">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-orange-500 w-6 sm:w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-10">
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white bg-opacity-50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
