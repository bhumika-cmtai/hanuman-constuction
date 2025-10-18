import { Phone, Mail, MapPin, Clock, Award, Users, Building2, CheckCircle } from 'lucide-react'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { label: "Main Office", value: "+91 98765 43210" },
        { label: "Emergency", value: "+91 98765 43211" },
        { label: "WhatsApp", value: "+91 98765 43212" }
      ],
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        { label: "General Inquiry", value: "constructionhanuman99@gmail.com" },
        { label: "Projects", value: "projects@hanumanconstructions.com" },
        { label: "Support", value: "support@hanumanconstructions.com" }
      ],
      color: "bg-blue-500"
    },
    {
      icon: MapPin,
      title: "Office Locations",
      details: [
        { label: "Main Office", value: "Near Ambuja Mall, Vidhansabha Road, Saddu, Raipur (C.G.)" },
        { label: "Branch Office", value: "Bhilai, Chhattisgarh" },
        { label: "Site Office", value: "Bilaspur, Chhattisgarh" }
      ],
      color: "bg-orange-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        { label: "Monday - Saturday", value: "9:00 AM - 6:00 PM" },
        { label: "Sunday", value: "Closed" },
        { label: "Emergency", value: "24/7 Available" }
      ],
      color: "bg-purple-500"
    }
  ]

  const quickStats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: CheckCircle, value: "98%", label: "Client Satisfaction" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us through any of the following channels. We&apos;re here to help with all your construction needs.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center`}>
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{contact.title}</h3>
              </div>
              
              <div className="space-y-4">
                {contact.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>
                    <h4 className="font-medium text-gray-900 mb-1">{detail.label}</h4>
                    <p className="text-gray-600 text-sm">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Clients Trust Us
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Promise */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Our Response Promise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">2 Hours</div>
              <div className="text-orange-100">Email Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24 Hours</div>
              <div className="text-orange-100">Quote Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">48 Hours</div>
              <div className="text-orange-100">Site Visit Schedule</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
