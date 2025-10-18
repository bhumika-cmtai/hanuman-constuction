import { Star, Users, Award, Clock, CheckCircle, ThumbsUp } from 'lucide-react'

export default function TestimonialsStats() {
  const stats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      description: "Based on 1000+ client reviews",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      value: "1000+",
      label: "Happy Clients",
      description: "Satisfied customers across all sectors",
      color: "text-blue-500"
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Retention",
      description: "Clients who return for more projects",
      color: "text-green-500"
    },
    {
      icon: Clock,
      value: "95%",
      label: "On-Time Delivery",
      description: "Projects completed within schedule",
      color: "text-purple-500"
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Quality Assured",
      description: "Projects meeting quality standards",
      color: "text-orange-500"
    },
    {
      icon: ThumbsUp,
      value: "99%",
      label: "Recommendation Rate",
      description: "Clients who recommend us to others",
      color: "text-red-500"
    }
  ]

  const clientTypes = [
    { type: "Residential Clients", percentage: 60, count: 600 },
    { type: "Commercial Clients", percentage: 25, count: 250 },
    { type: "Industrial Clients", percentage: 10, count: 100 },
    { type: "Institutional Clients", percentage: 5, count: 50 }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Satisfaction Statistics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our client satisfaction metrics and feedback
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Client Type Distribution */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Client Distribution by Sector
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {clientTypes.map((client, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{client.type}</span>
                    <span className="text-gray-900 font-semibold">{client.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-orange-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${client.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {client.count} clients
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
                <div className="text-gray-600">Total Clients Served</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">Residential Projects</span>
                  <span className="text-orange-600 font-semibold">600</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Commercial Projects</span>
                  <span className="text-blue-600 font-semibold">250</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Industrial Projects</span>
                  <span className="text-green-600 font-semibold">100</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">Institutional Projects</span>
                  <span className="text-purple-600 font-semibold">50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <Star className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">5-Star Reviews</h3>
            <div className="text-4xl font-bold mb-2">85%</div>
            <p className="text-orange-100">of our clients rate us 5 stars</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
            <Users className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Repeat Clients</h3>
            <div className="text-4xl font-bold mb-2">98%</div>
            <p className="text-blue-100">client retention rate</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
            <ThumbsUp className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Recommendations</h3>
            <div className="text-4xl font-bold mb-2">99%</div>
            <p className="text-green-100">would recommend us to others</p>
          </div>
        </div>
      </div>
    </section>
  )
}
