import Link from 'next/link'
import { MapPin, ArrowRight, Building2, Home, Factory, School, Eye, Heart } from 'lucide-react'

export default function ProjectsGrid() {
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
      status: "Completed",
      size: "2.5 Acres",
      duration: "18 Months",
      client: "ABC Developers",
      likes: 45,
      views: 1200
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
      status: "Completed",
      size: "1.8 Acres",
      duration: "24 Months",
      client: "XYZ Corporation",
      likes: 38,
      views: 980
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
      status: "Completed",
      size: "5.2 Acres",
      duration: "30 Months",
      client: "Industrial Group",
      likes: 52,
      views: 1500
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
      status: "Completed",
      size: "3.0 Acres",
      duration: "20 Months",
      client: "Education Trust",
      likes: 41,
      views: 1100
    },
    {
      id: 5,
      title: "Mixed-Use Development",
      category: "Commercial",
      location: "Raipur, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "An integrated development combining residential, commercial, and recreational spaces.",
      features: ["Residential Units", "Commercial Spaces", "Recreation Areas", "Green Spaces"],
      icon: Building2,
      status: "Ongoing",
      size: "4.5 Acres",
      duration: "36 Months",
      client: "Mixed Development Co.",
      likes: 67,
      views: 1800
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
      status: "Completed",
      size: "1.2 Acres",
      duration: "12 Months",
      client: "Luxury Homes Ltd.",
      likes: 73,
      views: 2200
    },
    {
      id: 7,
      title: "Shopping Mall Complex",
      category: "Commercial",
      location: "Bhilai, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A modern shopping mall with retail spaces, food court, and entertainment facilities.",
      features: ["Retail Spaces", "Food Court", "Entertainment", "Parking"],
      icon: Building2,
      status: "Completed",
      size: "2.8 Acres",
      duration: "28 Months",
      client: "Retail Group",
      likes: 59,
      views: 1600
    },
    {
      id: 8,
      title: "Hospital Complex",
      category: "Institutional",
      location: "Raipur, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      description: "A state-of-the-art hospital with modern medical facilities and patient care areas.",
      features: ["Modern Facilities", "Patient Care", "Emergency Services", "Specialized Units"],
      icon: School,
      status: "Completed",
      size: "3.5 Acres",
      duration: "32 Months",
      client: "Healthcare Group",
      likes: 48,
      views: 1300
    },
    {
      id: 9,
      title: "Warehouse Complex",
      category: "Industrial",
      location: "Korba, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A large warehouse complex with modern storage and logistics facilities.",
      features: ["Modern Storage", "Logistics Facilities", "Loading Docks", "Security Systems"],
      icon: Factory,
      status: "Ongoing",
      size: "6.0 Acres",
      duration: "18 Months",
      client: "Logistics Company",
      likes: 35,
      views: 900
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across various sectors and locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
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

                <div className="space-y-2 mb-4">
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

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Size:</span>
                    <span className="ml-1 font-medium text-gray-900">{project.size}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <span className="ml-1 font-medium text-gray-900">{project.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Client: {project.client}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 group">
            Load More Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
