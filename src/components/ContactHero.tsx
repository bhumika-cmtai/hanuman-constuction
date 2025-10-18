import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react'

export default function ContactHero() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our project manager",
      contact: "+91 98765 43210",
      action: "Call Now",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your project details",
      contact: "constructionhanuman99@gmail.com",
      action: "Send Email",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      contact: "Available 24/7",
      action: "Start Chat",
      color: "bg-purple-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office for consultation",
      contact: "Near Ambuja Mall, Raipur",
      action: "Get Directions",
      color: "bg-orange-500"
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start your construction project? Contact us today for a free consultation, 
            project quote, or any questions you may have. We're here to help bring your vision to life.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-orange-300"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  {method.title}
                </h3>
                <p className="text-orange-100 mb-4 text-sm">
                  {method.description}
                </p>
                <div className="text-white font-medium mb-4">
                  {method.contact}
                </div>
                <button className="inline-flex items-center text-orange-300 hover:text-orange-200 font-medium transition-colors group-hover:translate-x-1">
                  {method.action}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Office Hours & Location
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Office Hours</h4>
                  <p className="text-orange-100">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-orange-100">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Our Location</h4>
                  <p className="text-orange-100">Near Ambuja Mall, Vidhansabha Road</p>
                  <p className="text-orange-100">Saddu, Raipur (C.G.)</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Emergency Contact</h4>
                  <p className="text-orange-100">Available 24/7 for urgent matters</p>
                  <p className="text-white font-semibold">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email Response</h4>
                  <p className="text-orange-100">We respond within 2 hours</p>
                  <p className="text-white font-semibold">constructionhanuman99@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
