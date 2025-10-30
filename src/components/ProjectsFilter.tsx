'use client'

import { useState } from 'react'
import { Building2, Home, Factory, School, Calendar, MapPin } from 'lucide-react'

export default function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Projects', count: 500, icon: Building2 },
    { id: 'residential', name: 'Residential', count: 200, icon: Home },
    { id: 'commercial', name: 'Commercial', count: 150, icon: Building2 },
    { id: 'industrial', name: 'Industrial', count: 100, icon: Factory },
    { id: 'institutional', name: 'Institutional', count: 50, icon: School }
  ]

  const projectStages = [
    { id: 'completed', name: 'Completed Projects', count: 450, color: 'bg-green-500' },
    { id: 'ongoing', name: 'Ongoing Projects', count: 30, color: 'bg-yellow-500' },
    { id: 'upcoming', name: 'Upcoming Projects', count: 20, color: 'bg-blue-500' }
  ]

  const projectYears = [
    { year: '2024', count: 50 },
    { year: '2023', count: 80 },
    { year: '2022', count: 70 },
    { year: '2021', count: 60 },
    { year: '2020', count: 40 }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600">
            Bellow are our projects by category, stage, or year to find exactly what you&apos;re looking for
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Categories</h3>
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
                    <Calendar className="h-6 w-6 text-white" />
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
                  <div className="text-sm text-gray-600">{year.count} Projects</div>
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
                { city: 'Raipur', count: 150 },
                { city: 'Bhilai', count: 100 },
                { city: 'Bilaspur', count: 80 },
                { city: 'Durg', count: 70 },
                { city: 'Korba', count: 50 },
                { city: 'Rajnandgaon', count: 30 },
                { city: 'Ambikapur', count: 20 },
                { city: 'Other Cities', count: 100 }
              ].map((location, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="font-medium text-gray-900">{location.city}</div>
                    <div className="text-sm text-gray-600">{location.count} Projects</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filter Display */}
        {/* <div className="bg-orange-100 rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-orange-800 mb-2">
            Currently Showing: {filters.find(f => f.id === activeFilter)?.name}
          </h4>
          <p className="text-orange-600">
            {filters.find(f => f.id === activeFilter)?.count} projects found
          </p>
        </div> */}
      </div>
    </section>
  )
}
