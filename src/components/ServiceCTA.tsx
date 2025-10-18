import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react'

export default function ServiceCTA() {
  const benefits = [
    "Free consultation and project estimation",
    "Transparent pricing with no hidden costs",
    "Expert team with 25+ years experience",
    "Quality assured work with warranty",
    "On-time project delivery",
    "24/7 customer support"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Get a free consultation and detailed quote for your construction project. 
            Our expert team is ready to bring your vision to life with quality and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Options */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch With Us
            </h3>

            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Call Us Now</h4>
                    <p className="text-orange-100">Speak directly with our project manager</p>
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
                    <h4 className="text-lg font-semibold text-white">Send Email</h4>
                    <p className="text-orange-100">Get detailed project information</p>
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
                    <h4 className="text-lg font-semibold text-white">Quick Chat</h4>
                    <p className="text-orange-100">Get instant answers to your questions</p>
                    <button className="text-white font-semibold hover:text-orange-200 transition-colors">
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits & CTA */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Office Hours & Location
              </h4>
              <div className="space-y-2 text-orange-100">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Monday - Saturday: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Sunday: Closed</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Shield className="h-4 w-4 mt-1" />
                  <span>Near Ambuja Mall, Vidhansabha Road, Saddu, Raipur (C.G.)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200 group">
                Schedule Visit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Dream Project?
            </h3>
            <p className="text-orange-100 mb-6">
              Don't wait! Contact us today for a free consultation and let our expert team 
              help you plan and execute your construction project with excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 98765 43210
              </a>
              <a
                href="mailto:constructionhanuman99@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
