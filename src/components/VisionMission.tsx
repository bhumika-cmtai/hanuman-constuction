import { Target, Eye, Heart, Lightbulb, Users, Award } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our vision and mission guide everything we do, from project planning to execution and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                The mission of Hanuman Constructions is to provide high-quality solutions and exceptional services. 
                We are committed to innovation, customer satisfaction, and the use of advanced technology to create 
                products and experiences that bring meaningful change and help clients achieve their goals.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Key Focus Areas:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Quality Excellence",
                    "Customer Satisfaction",
                    "Innovation & Technology",
                    "Sustainable Practices",
                    "Timely Delivery",
                    "Cost Effectiveness"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                <Eye className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                The vision of Hanuman Constructions is built on the core values of honesty, innovation, and customer-centricity. 
                We aim to ensure that every product and service meets the highest standards, drives continuous growth through 
                collaboration and creativity, creates a positive impact, builds trust, and delivers true value to customers and communities.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Vision Pillars:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Honesty & Integrity",
                    "Innovation & Creativity",
                    "Customer-Centricity",
                    "Community Impact",
                    "Trust Building",
                    "Value Delivery"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h4>
              <p className="text-gray-600">
                We conduct business with the highest ethical standards and transparency in all our dealings.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h4>
              <p className="text-gray-600">
                We embrace new technologies and creative solutions to deliver cutting-edge construction services.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Customer Focus</h4>
              <p className="text-gray-600">
                Our clients' success is our success. We prioritize their needs and exceed their expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h4>
              <p className="text-gray-600">
                We strive for perfection in every project, ensuring the highest quality standards and craftsmanship.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Reliability</h4>
              <p className="text-gray-600">
                We deliver on our promises with consistent performance and dependable project execution.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Community</h4>
              <p className="text-gray-600">
                We are committed to building stronger communities through responsible construction practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
