import Link from 'next/link'
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Get a free consultation and quote for your construction project. 
            Our expert team is ready to bring your vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Call Us Now</h3>
              <p className="text-orange-100 mb-4">
                Speak directly with our project manager
              </p>
              <a
                href="tel:+919876543210"
                className="text-white font-semibold hover:text-orange-200 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Send Email</h3>
              <p className="text-orange-100 mb-4">
                Get detailed project information
              </p>
              <a
                href="mailto:constructionhanuman99@gmail.com"
                className="text-white font-semibold hover:text-orange-200 transition-colors"
              >
                constructionhanuman99@gmail.com
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Chat</h3>
              <p className="text-orange-100 mb-4">
                Get instant answers to your questions
              </p>
              <button className="text-white font-semibold hover:text-orange-200 transition-colors">
                Start Chat
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 group shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200 group"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-orange-100 text-sm">
              <strong>Office Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM | Sunday: Closed
            </p>
            <p className="text-orange-200 text-sm mt-2">
              <strong>Location:</strong> Near Ambuja Mall, Vidhansabha Road, Saddu, Raipur (C.G.)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
