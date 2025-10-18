import { Star, Quote, Users, Award, ThumbsUp, MessageCircle } from 'lucide-react'

export default function TestimonialsHero() {
  const stats = [
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: ThumbsUp, value: "98%", label: "Client Retention" },
    { icon: Award, value: "25+", label: "Years Experience" }
  ]

  const ratingBreakdown = [
    { stars: 5, percentage: 85, count: 850 },
    { stars: 4, percentage: 12, count: 120 },
    { stars: 3, percentage: 2, count: 20 },
    { stars: 2, percentage: 1, count: 10 },
    { stars: 1, percentage: 0, count: 0 }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say 
            about our construction services and project delivery.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-orange-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Rating Breakdown */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Client Rating Breakdown
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {ratingBreakdown.map((rating, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-white font-medium">{rating.stars}</span>
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-white bg-opacity-20 rounded-full h-3">
                    <div 
                      className="bg-yellow-400 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-white font-medium w-12 text-right">
                    {rating.percentage}%
                  </div>
                  <div className="text-orange-200 text-sm w-16">
                    ({rating.count})
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-4">4.9</div>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-orange-100 text-lg">Based on 1000+ reviews</p>
              <div className="mt-6 space-y-2">
                <div className="text-white">
                  <span className="font-semibold">Excellent:</span> 85% of clients
                </div>
                <div className="text-white">
                  <span className="font-semibold">Very Good:</span> 12% of clients
                </div>
                <div className="text-white">
                  <span className="font-semibold">Good:</span> 2% of clients
                </div>
                <div className="text-white">
                  <span className="font-semibold">Average:</span> 1% of clients
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Real Reviews</h4>
            <p className="text-orange-100">
              Authentic testimonials from our actual clients and project partners
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Detailed Feedback</h4>
            <p className="text-orange-100">
              Comprehensive reviews covering all aspects of our construction services
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Quality Assured</h4>
            <p className="text-orange-100">
              Consistent high ratings across all project types and client categories
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
