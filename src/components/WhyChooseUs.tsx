import { CheckCircle, Award, Clock, Shield, Users, Wrench, Phone, Mail } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Over two decades of expertise in construction industry with proven track record of successful projects.",
      details: "Established in 1999, we have completed 500+ projects across various sectors"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed construction company with comprehensive insurance coverage for your peace of mind.",
      details: "RERA registered, ISO certified, and fully insured for all construction activities"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We understand the importance of deadlines and consistently deliver projects on time and within budget.",
      details: "98% of our projects are completed on schedule with proper project management"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals include engineers, architects, and craftsmen with years of experience.",
      details: "50+ certified professionals including civil engineers, architects, and skilled workers"
    },
    {
      icon: Wrench,
      title: "Quality Materials",
      description: "We use only the finest materials and latest construction techniques for durable and long-lasting structures.",
      details: "Premium quality materials sourced from trusted suppliers and manufacturers"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure that every project meets the highest standards of excellence.",
      details: "Multi-level quality checks and inspections throughout the construction process"
    }
  ]

  const additionalBenefits = [
    "Free consultation and project estimation",
    "Transparent pricing with no hidden costs",
    "24/7 customer support and assistance",
    "Post-completion maintenance services",
    "Warranty on all construction work",
    "Regular project updates and communication",
    "Flexible payment options available",
    "Emergency repair services"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Hanuman Constructions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering exceptional construction services that exceed your expectations. 
            Here&apos;s what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-orange-50 transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {reason.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {reason.description}
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-700 font-medium">
                  {reason.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a trusted construction partner. 
            Get your free consultation and quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </div>
    </section>
  )
}
