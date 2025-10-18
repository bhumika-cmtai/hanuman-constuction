'use client'

import { useState, useEffect } from 'react'
import { Building2, Users, Award, Clock } from 'lucide-react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    {
      icon: Building2,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-orange-500'
    },
    {
      icon: Users,
      value: 1000,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      value: 25,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      value: 98,
      suffix: '%',
      label: 'On-Time Delivery',
      color: 'text-purple-500'
    }
  ]

  const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let startTime: number
      const startValue = 0
      const endValue = end

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [end, duration])

    return <span>{count}</span>
  }

  return (
    <section id="stats-section" className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            These numbers reflect our commitment to excellence and the trust our clients place in us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 group-hover:scale-105">
                <div className={`w-16 h-16 ${stat.color} bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <Counter end={stat.value} />
                  <span className="text-orange-200">{stat.suffix}</span>
                </div>
                <div className="text-lg text-orange-100 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-orange-100 mb-6">
              We have successfully completed projects for various sectors including residential, 
              commercial, industrial, and institutional clients across Chhattisgarh and beyond.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-orange-200 text-sm">Residential Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-orange-200 text-sm">Commercial Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-orange-200 text-sm">Industrial Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-orange-200 text-sm">Institutional Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
