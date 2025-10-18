import { Phone, Mail, MessageCircle, ArrowRight, Building2, Calendar, MapPin } from 'lucide-react'

export default function ProjectsCTA() {
  const projectStats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Calendar, value: "25+", label: "Years Experience" },
    { icon: MapPin, value: "8+", label: "Cities Covered" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their construction needs. 
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Stats */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Project Achievements
            </h3>

            <div className="space-y-6">
              {projectStats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-orange-100">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Project Success Rate
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-orange-100">On-Time Delivery</span>
                  <span className="text-white font-semibold">98%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-orange-300 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-orange-100">Client Satisfaction</span>
                  <span className="text-white font-semibold">100%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-orange-300 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-orange-100">Quality Standards</span>
                  <span className="text-white font-semibold">100%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div className="bg-orange-300 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get Your Project Started
            </h3>

            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Call for Consultation</h4>
                    <p className="text-orange-100 mb-2">Speak directly with our project manager</p>
                    <a
                      href="tel:+919876543210"
                      className="text-white font-semibold hover:text-orange-200 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email Project Details</h4>
                    <p className="text-orange-100 mb-2">Send us your project requirements</p>
                    <a
                      href="mailto:constructionhanuman99@gmail.com"
                      className="text-white font-semibold hover:text-orange-200 transition-colors"
                    >
                      constructionhanuman99@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Schedule Site Visit</h4>
                    <p className="text-orange-100 mb-2">Book a free site visit and consultation</p>
                    <button className="text-white font-semibold hover:text-orange-200 transition-colors">
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200 group">
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Us for Your Next Project?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-orange-100">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">25+ Years Experience</h4>
                <p className="text-sm">Proven track record in construction industry</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Quality Assured</h4>
                <p className="text-sm">Highest standards of quality and safety</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">On-Time Delivery</h4>
                <p className="text-sm">98% of projects completed on schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
