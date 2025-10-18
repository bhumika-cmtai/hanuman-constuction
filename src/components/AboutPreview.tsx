import Link from 'next/link'
import { Building2, Target, Eye, Users, Award, CheckCircle } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                About HTC Hanuman Constructions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We are dedicated to delivering high-quality, reliable, and innovative construction solutions. 
                Built on the pillars of honesty, innovation, and customer-centricity, we take pride in 
                providing exceptional services that meet the evolving needs of our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Provide high-quality solutions and exceptional services through innovation and advanced technology.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Our Vision</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Built on honesty, innovation, and customer-centricity to create lasting impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  "25+ Years of Experience",
                  "Licensed & Insured",
                  "Quality Assured Work",
                  "On-Time Project Delivery",
                  "Competitive Pricing",
                  "24/7 Customer Support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm sm:text-base"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="space-y-6 sm:space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">500+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Projects Completed</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">1000+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Happy Clients</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">25+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Years Experience</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">100%</div>
                <div className="text-gray-600 text-xs sm:text-sm">Quality Assured</div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Construction team at work"
                className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Professional Team</h4>
                <p className="text-xs sm:text-sm">Expert craftsmen delivering excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
