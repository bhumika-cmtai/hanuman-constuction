import { Camera, Video, Image, Eye, Heart, Share2 } from 'lucide-react'

export default function GalleryHero() {
  const galleryStats = [
    { icon: Image, value: "1000+", label: "Project Photos" },
    { icon: Video, value: "50+", label: "Project Videos" },
    { icon: Camera, value: "500+", label: "Projects Documented" },
    { icon: Eye, value: "10K+", label: "Monthly Views" }
  ]

  const galleryCategories = [
    {
      name: "Residential Projects",
      description: "Luxury homes, apartments, and residential complexes",
      count: "400+ Photos",
      color: "bg-blue-500"
    },
    {
      name: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial complexes",
      count: "300+ Photos",
      color: "bg-green-500"
    },
    {
      name: "Industrial Projects",
      description: "Manufacturing units, warehouses, and industrial facilities",
      count: "200+ Photos",
      color: "bg-yellow-500"
    },
    {
      name: "Institutional Projects",
      description: "Schools, hospitals, and government buildings",
      count: "100+ Photos",
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
            Project Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of construction project photos and videos. 
            See the quality of our work and the transformation we bring to every project.
          </p>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {galleryStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-orange-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Gallery Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-orange-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-orange-200 text-sm">{category.count}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Gallery Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">High-Quality Images</h4>
              <p className="text-orange-100">
                Professional photography showcasing every detail of our construction work
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Project Videos</h4>
              <p className="text-orange-100">
                Time-lapse videos and project walkthroughs showing construction progress
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Before & After</h4>
              <p className="text-orange-100">
                See the transformation from concept to completion in our project galleries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
