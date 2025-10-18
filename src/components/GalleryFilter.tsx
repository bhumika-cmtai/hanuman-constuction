'use client'

import { useState } from 'react'
import { Camera, Video, Image, Building2, Home, Factory, School, MapPin } from 'lucide-react'

export default function GalleryFilter() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Media', count: 1000, icon: Camera },
    { id: 'photos', name: 'Photos', count: 800, icon: Image },
    { id: 'videos', name: 'Videos', count: 200, icon: Video }
  ]

  const projectCategories = [
    { id: 'residential', name: 'Residential', count: 400, icon: Home },
    { id: 'commercial', name: 'Commercial', count: 300, icon: Building2 },
    { id: 'industrial', name: 'Industrial', count: 200, icon: Factory },
    { id: 'institutional', name: 'Institutional', count: 100, icon: School }
  ]

  const projectStages = [
    { id: 'completed', name: 'Completed Projects', count: 450, color: 'bg-green-500' },
    { id: 'ongoing', name: 'Ongoing Projects', count: 30, color: 'bg-yellow-500' },
    { id: 'progress', name: 'Progress Photos', count: 120, color: 'bg-blue-500' }
  ]

  const projectYears = [
    { year: '2024', count: 200 },
    { year: '2023', count: 300 },
    { year: '2022', count: 250 },
    { year: '2021', count: 150 },
    { year: '2020', count: 100 }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Filter Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Browse our gallery by media type, project category, or year to find exactly what you&apos;re looking for
          </p>
        </div>

        {/* Media Type Filters */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Media Type</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                }`}
              >
                <filter.icon className="h-5 w-5" />
                <span>{filter.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Category Filters */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Categories</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                className="flex items-center space-x-3 px-6 py-3 rounded-full font-medium bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 transition-all duration-200"
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Stages */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Stages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectStages.map((stage) => (
              <div
                key={stage.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${stage.color} rounded-lg flex items-center justify-center`}>
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{stage.name}</h4>
                    <p className="text-2xl font-bold text-orange-600">{stage.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Years */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Projects by Year</h3>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {projectYears.map((year) => (
                <div
                  key={year.year}
                  className="text-center p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                >
                  <div className="text-2xl font-bold text-orange-600 mb-2">{year.year}</div>
                  <div className="text-sm text-gray-600">{year.count} Photos</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Locations</h3>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { city: 'Raipur', count: 400 },
                { city: 'Bhilai', count: 250 },
                { city: 'Bilaspur', count: 200 },
                { city: 'Durg', count: 150 },
                { city: 'Korba', count: 100 },
                { city: 'Rajnandgaon', count: 50 },
                { city: 'Ambikapur', count: 30 },
                { city: 'Other Cities', count: 120 }
              ].map((location, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="font-medium text-gray-900">{location.city}</div>
                    <div className="text-sm text-gray-600">{location.count} Photos</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filter Display */}
        <div className="bg-orange-100 rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-orange-800 mb-2">
            Currently Showing: {filters.find(f => f.id === activeFilter)?.name}
          </h4>
          <p className="text-orange-600">
            {filters.find(f => f.id === activeFilter)?.count} media files found
          </p>
        </div>
      </div>
    </section>
  )
}
