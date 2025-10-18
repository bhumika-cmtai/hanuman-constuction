import { Building2, Wrench, Zap, Paintbrush, TreePine, Cog, ClipboardCheck, Wrench as Maintenance, Leaf } from 'lucide-react'

export default function ServicesHero() {
  const serviceCategories = [
    {
      icon: Building2,
      title: "Core Construction",
      count: "8 Services",
      color: "bg-blue-500"
    },
    {
      icon: Wrench,
      title: "Pre-Construction",
      count: "8 Services",
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "MEP Services",
      count: "8 Services",
      color: "bg-yellow-500"
    },
    {
      icon: Paintbrush,
      title: "Interior & Finishing",
      count: "9 Services",
      color: "bg-purple-500"
    },
    {
      icon: TreePine,
      title: "Exterior & Landscaping",
      count: "6 Services",
      color: "bg-emerald-500"
    },
    {
      icon: Cog,
      title: "Specialized Construction",
      count: "9 Services",
      color: "bg-red-500"
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      count: "8 Services",
      color: "bg-indigo-500"
    },
    {
      icon: Maintenance,
      title: "Maintenance Services",
      count: "7 Services",
      color: "bg-orange-500"
    },
    {
      icon: Leaf,
      title: "Green Building",
      count: "5 Services",
      color: "bg-teal-500"
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
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From concept to completion, we offer a full range of construction services 
            to meet all your building needs. Our expertise spans across residential, 
            commercial, industrial, and specialized construction projects.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-orange-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-orange-200 text-sm">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Complete Solutions</h3>
            <p className="text-gray-300">
              End-to-end construction services from planning to maintenance
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-300">
              Skilled professionals with years of experience in construction
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quality Assured</h3>
            <p className="text-gray-300">
              Rigorous quality control and adherence to industry standards
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
