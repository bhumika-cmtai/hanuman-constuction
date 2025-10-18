import { Phone, Mail, MessageCircle, ArrowRight, Star, Users, Award } from 'lucide-react'

export default function TestimonialsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Experience the quality and excellence that has made us 
            the trusted construction partner for over 1000+ clients across Chhattisgarh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Client Success Stats */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Client Success Metrics
            </h3>

            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">4.9/5 Average Rating</h4>
                    <p className="text-orange-100">Based on 1000+ client reviews</p>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">98% Client Retention</h4>
                    <p className="text-orange-100">Clients who return for more projects</p>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">100% Quality Assured</h4>
                    <p className="text-orange-100">Every project meets our high standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>

            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Call for Free Consultation</h4>
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
                    <h4 className="text-lg font-semibold text-white">Email Your Requirements</h4>
                    <p className="text-orange-100 mb-2">Get detailed project information</p>
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
                    <p className="text-orange-100 mb-2">Book a free consultation and site visit</p>
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
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Testimonial Highlights */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-orange-100">
              <div>
                <div className="text-4xl font-bold text-white mb-2">&quot;Excellent&quot;</div>
                <p className="text-sm">Quality of work and professionalism</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">&quot;Reliable&quot;</div>
                <p className="text-sm">On-time delivery and communication</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">&quot;Trustworthy&quot;</div>
                <p className="text-sm">Transparent pricing and honest service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
