import { Building2, Home, Factory, School, Calendar, MapPin, ArrowRight } from 'lucide-react'

export default function ProjectsHero() {
  const projectStats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Home, value: "200+", label: "Residential Projects" },
    { icon: Factory, value: "150+", label: "Commercial Projects" },
    { icon: School, value: "100+", label: "Industrial Projects" }
  ]

  const projectTypes = [
    {
      name: "Residential Properties",
      description: "Luxury homes, apartments, and residential complexes",
      count: "200+ Projects",
      color: "bg-blue-500"
    },
    {
      name: "Commercial Properties",
      description: "Office buildings, retail spaces, and commercial complexes",
      count: "150+ Projects",
      color: "bg-green-500"
    },
    {
      name: "Industrial Properties",
      description: "Manufacturing units, warehouses, and industrial facilities",
      count: "100+ Projects",
      color: "bg-yellow-500"
    },
    {
      name: "Institutional Properties",
      description: "Schools, hospitals, and government buildings",
      count: "50+ Projects",
      color: "bg-purple-500"
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
            Our Project Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse portfolio of successful construction projects across various sectors. 
            From residential homes to commercial complexes, we deliver excellence in every project.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-orange-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Project Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectTypes.map((type, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-orange-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-orange-200 text-sm">{type.count}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Project Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">25+ Years</h4>
              <p className="text-orange-100">
                Of successful project delivery and client satisfaction
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Multiple Cities</h4>
              <p className="text-orange-100">
                Projects completed across Chhattisgarh and neighboring states
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Quality Assured</h4>
              <p className="text-orange-100">
                Every project meets the highest standards of quality and safety
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
