import { Phone, Mail, MessageCircle, CheckCircle, Clock } from 'lucide-react'

export default function ContactCTA() {
  const benefits = [
    "Free consultation and project estimation",
    "Transparent pricing with no hidden costs",
    "Expert team with 25+ years experience",
    "Quality assured work with warranty",
    "On-time project delivery",
    "24/7 customer support"
  ]

  const responseTimes = [
    { icon: Clock, time: "2 Hours", description: "Email Response" },
    { icon: MessageCircle, time: "24 Hours", description: "Quote Delivery" },
    { icon: Phone, time: "Immediate", description: "Phone Support" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Don&apos;t wait! Contact us today for a free consultation and let our expert team 
            help you plan and execute your construction project with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Options */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch Today
            </h3>

            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Call for Immediate Response</h4>
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
          </div>

          {/* Benefits & Response Times */}
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
                Our Response Promise
              </h4>
              <div className="space-y-4">
                {responseTimes.map((response, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <response.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{response.time}</div>
                      <div className="text-orange-100 text-sm">{response.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 group"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 98765 43210
            </a>
            
            <a
              href="mailto:constructionhanuman99@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200 group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
            
            
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by 1000+ Clients
            </h3>
            <p className="text-orange-100 mb-6">
              Join hundreds of satisfied clients who have trusted us with their construction needs. 
              From residential homes to commercial complexes, we deliver excellence in every project.
            </p>
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
