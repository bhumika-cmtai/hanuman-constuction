import { Heart, Lightbulb, Users, Award, Shield, Clock } from 'lucide-react'

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our dealings.",
      details: [
        "Honest communication with clients",
        "Transparent pricing and contracts",
        "Ethical business practices",
        "Accountability in all actions"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to deliver cutting-edge construction services.",
      details: [
        "Latest construction technologies",
        "Creative problem-solving approaches",
        "Continuous improvement mindset",
        "Digital project management tools"
      ]
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients' success is our success. We prioritize their needs and exceed their expectations.",
      details: [
        "Client-centric approach",
        "Customized solutions",
        "Regular communication",
        "Post-completion support"
      ]
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards and craftsmanship.",
      details: [
        "Quality assurance processes",
        "Skilled craftsmanship",
        "Premium materials",
        "Attention to detail"
      ]
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "We deliver on our promises with consistent performance and dependable project execution.",
      details: [
        "On-time project delivery",
        "Consistent quality standards",
        "Dependable service",
        "Long-term partnerships"
      ]
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "We optimize resources and processes to deliver projects efficiently without compromising quality.",
      details: [
        "Streamlined processes",
        "Resource optimization",
        "Time management",
        "Cost-effective solutions"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide our decisions, shape our culture, and drive our commitment to excellence in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">How We Practice It:</h4>
                <ul className="space-y-2">
                  {value.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Values in Action
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Testimonials</h4>
                  <p className="text-gray-600">
                    Our clients consistently praise our integrity and transparency in project communication and execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Certifications</h4>
                  <p className="text-gray-600">
                    We maintain ISO 9001:2015 certification and other quality standards that reflect our commitment to excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation Awards</h4>
                  <p className="text-gray-600">
                    We&apos;ve received recognition for implementing innovative construction techniques and sustainable practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h4>
                  <p className="text-gray-600">
                    We actively contribute to community development through responsible construction practices and local employment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
