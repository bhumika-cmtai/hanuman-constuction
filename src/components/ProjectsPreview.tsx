import Link from 'next/link'
import { MapPin, ArrowRight, Building2, Home, Factory, School } from 'lucide-react'

export default function ProjectsPreview() {
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      location: "Raipur, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A luxury residential complex with 50 units, featuring modern amenities and sustainable design.",
      features: ["50 Units", "Modern Amenities", "Sustainable Design", "Parking Facility"],
      icon: Home,
      status: "Completed"
    },
    {
      id: 2,
      title: "Commercial Office Tower",
      category: "Commercial",
      location: "Bhilai, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A 15-story commercial tower with state-of-the-art facilities and energy-efficient systems.",
      features: ["15 Floors", "Energy Efficient", "Modern Facilities", "Prime Location"],
      icon: Building2,
      status: "Completed"
    },
    {
      id: 3,
      title: "Industrial Manufacturing Unit",
      category: "Industrial",
      location: "Bilaspur, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A large-scale industrial facility with advanced manufacturing capabilities and safety systems.",
      features: ["Large Scale", "Advanced Systems", "Safety Compliant", "Efficient Layout"],
      icon: Factory,
      status: "Completed"
    },
    {
      id: 4,
      title: "Educational Institution",
      category: "Institutional",
      location: "Durg, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
      description: "A comprehensive educational campus with modern classrooms, laboratories, and sports facilities.",
      features: ["Modern Classrooms", "Laboratories", "Sports Facilities", "Library"],
      icon: School,
      status: "Completed"
    },
    {
      id: 5,
      title: "Mixed-Use Development",
      category: "Mixed-Use",
      location: "Raipur, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "An integrated development combining residential, commercial, and recreational spaces.",
      features: ["Residential Units", "Commercial Spaces", "Recreation Areas", "Green Spaces"],
      icon: Building2,
      status: "Ongoing"
    },
    {
      id: 6,
      title: "Luxury Villa Project",
      category: "Residential",
      location: "Naya Raipur, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      description: "Exclusive luxury villas with premium finishes and private amenities.",
      features: ["Luxury Finishes", "Private Amenities", "Premium Location", "Custom Design"],
      icon: Home,
      status: "Completed"
    }
  ]

  const categories = [
    { name: "All", count: projects.length, active: true },
    { name: "Residential", count: projects.filter(p => p.category === "Residential").length, active: false },
    { name: "Commercial", count: projects.filter(p => p.category === "Commercial").length, active: false },
    { name: "Industrial", count: projects.filter(p => p.category === "Industrial").length, active: false },
    { name: "Institutional", count: projects.filter(p => p.category === "Institutional").length, active: false },
    { name: "Mixed-Use", count: projects.filter(p => p.category === "Mixed-Use").length, active: false }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across various sectors
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                category.active
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <project.icon className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-white font-medium hover:text-orange-300 transition-colors"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 2 && (
                    <div className="text-sm text-gray-500">
                      +{project.features.length - 2} more features
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
