'use client'

import { useState } from 'react'
import { Heart, Eye, Share2, Download, Play, Calendar, MapPin, Building2, Home, Factory, School } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  category: string 
  location: string
  year: string
  image: string
  type: string
  likes: number
  views: number
  icon: React.ComponentType<{ className?: string }>
  description: string
}

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const galleryItems = [
    {
      id: 1,
      title: "Modern Residential Complex - Exterior",
      category: "Residential",
      location: "Raipur, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "photo",
      likes: 45,
      views: 1200,
      icon: Home,
      description: "Beautiful exterior view of the completed residential complex"
    },
    {
      id: 2,
      title: "Commercial Office Tower - Lobby",
      category: "Commercial",
      location: "Bhilai, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "photo",
      likes: 38,
      views: 980,
      icon: Building2,
      description: "Elegant lobby design with modern finishes"
    },
    {
      id: 3,
      title: "Industrial Manufacturing Unit",
      category: "Industrial",
      location: "Bilaspur, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "video",
      likes: 52,
      views: 1500,
      icon: Factory,
      description: "Time-lapse video of industrial facility construction"
    },
    {
      id: 4,
      title: "Educational Institution - Campus View",
      category: "Institutional",
      location: "Durg, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80",
      type: "photo",
      likes: 41,
      views: 1100,
      icon: School,
      description: "Aerial view of the educational campus"
    },
    {
      id: 5,
      title: "Mixed-Use Development - Progress",
      category: "Commercial",
      location: "Raipur, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "video",
      likes: 67,
      views: 1800,
      icon: Building2,
      description: "Construction progress video showing various phases"
    },
    {
      id: 6,
      title: "Luxury Villa - Interior Design",
      category: "Residential",
      location: "Naya Raipur, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      type: "photo",
      likes: 73,
      views: 2200,
      icon: Home,
      description: "Luxurious interior design with premium finishes"
    },
    {
      id: 7,
      title: "Shopping Mall - Atrium View",
      category: "Commercial",
      location: "Bhilai, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "photo",
      likes: 59,
      views: 1600,
      icon: Building2,
      description: "Stunning atrium design with natural lighting"
    },
    {
      id: 8,
      title: "Hospital Complex - Emergency Wing",
      category: "Institutional",
      location: "Raipur, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      type: "video",
      likes: 48,
      views: 1300,
      icon: School,
      description: "Modern hospital emergency wing construction"
    },
    {
      id: 9,
      title: "Warehouse Complex - Aerial View",
      category: "Industrial",
      location: "Korba, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "photo",
      likes: 35,
      views: 900,
      icon: Factory,
      description: "Aerial view of the completed warehouse complex"
    },
    {
      id: 10,
      title: "Residential Apartment - Kitchen Design",
      category: "Residential",
      location: "Raipur, C.G.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "photo",
      likes: 42,
      views: 1100,
      icon: Home,
      description: "Modern kitchen design with premium appliances"
    },
    {
      id: 11,
      title: "Office Building - Conference Room",
      category: "Commercial",
      location: "Bhilai, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      type: "video",
      likes: 31,
      views: 800,
      icon: Building2,
      description: "Executive conference room with modern technology"
    },
    {
      id: 12,
      title: "School Building - Playground",
      category: "Institutional",
      location: "Durg, C.G.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      type: "photo",
      likes: 39,
      views: 950,
      icon: School,
      description: "Modern playground with safety features"
    }
  ]

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of high-quality project photos and videos showcasing our construction expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2">
                      {item.type === 'video' ? (
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <span className="text-white text-sm font-medium">{item.category}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                      {item.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{item.location}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 group">
            Load More Photos
            <Eye className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-colors"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedImage.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{selectedImage.year}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                          <Heart className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
                          <Share2 className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-green-500 transition-colors">
                          <Download className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
