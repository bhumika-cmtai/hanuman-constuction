import Link from 'next/link'
import { 
  Building2, 
  Wrench, 
  Zap, 
  Paintbrush, 
  TreePine, 
  Cog, 
  ClipboardCheck, 
  Wrench as Maintenance,
  Leaf
} from 'lucide-react'

export default function ServicesPreview() {
  const services = [
    {
      icon: Building2,
      title: "Core Construction",
      description: "Building construction, civil engineering, masonry, and structural work for all types of projects.",
      features: ["Residential", "Commercial", "Industrial", "Road Construction"],
      color: "bg-blue-500"
    },
    {
      icon: Wrench,
      title: "Pre-Construction",
      description: "Feasibility studies, land surveying, architectural design, and project planning services.",
      features: ["Feasibility Study", "Land Surveying", "3D Modeling", "Cost Estimation"],
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "MEP Services",
      description: "Mechanical, electrical, and plumbing services for complete building operations.",
      features: ["Electrical Wiring", "HVAC Systems", "Plumbing", "Fire Safety"],
      color: "bg-yellow-500"
    },
    {
      icon: Paintbrush,
      title: "Interior & Finishing",
      description: "Complete interior design and finishing services for aesthetic and functional spaces.",
      features: ["Interior Design", "False Ceiling", "Painting", "Carpentry"],
      color: "bg-purple-500"
    },
    {
      icon: TreePine,
      title: "Exterior & Landscaping",
      description: "Outdoor construction, landscaping, and beautification services.",
      features: ["Landscaping", "Compound Walls", "Pavement", "Water Features"],
      color: "bg-emerald-500"
    },
    {
      icon: Cog,
      title: "Specialized Construction",
      description: "Large-scale and specialized construction projects including industrial and infrastructure.",
      features: ["Industrial Sheds", "Bridges", "Metro Infrastructure", "Dams"],
      color: "bg-red-500"
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Professional project management and consulting services for successful execution.",
      features: ["Site Supervision", "Quality Control", "Risk Management", "Documentation"],
      color: "bg-indigo-500"
    },
    {
      icon: Maintenance,
      title: "Maintenance Services",
      description: "Post-construction maintenance and repair services for long-term sustainability.",
      features: ["Building Maintenance", "AMC Services", "Renovation", "Repairs"],
      color: "bg-orange-500"
    },
    {
      icon: Leaf,
      title: "Green Building",
      description: "Sustainable and eco-friendly construction solutions for modern buildings.",
      features: ["Energy Efficiency", "Solar Power", "Rainwater Harvesting", "Waste Management"],
      color: "bg-teal-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer a full range of construction services 
            to meet all your building needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200"
            >
              <div className="p-8">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-8 pb-8">
                <Link
                  href="/services"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Every project is unique. Our expert team can provide customized construction 
              solutions tailored to your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                View All Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
