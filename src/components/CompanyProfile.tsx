import { Building2, Users, CheckCircle } from 'lucide-react'

export default function CompanyProfile() {
  const achievements = [
    "Licensed & Insured Construction Company",
    "ISO 9001:2015 Quality Management Certified",
    "RERA Registered Construction Firm",
    "Member of Builders Association of India",
    "Awarded Best Construction Company 2023",
    "Zero Safety Incidents in Last 5 Years"
  ]

  const milestones = [
    {
      year: "1999",
      title: "Company Founded",
      description: "Started as a small construction firm with a vision to build quality structures"
    },
    {
      year: "2005",
      title: "First Major Project",
      description: "Completed our first commercial complex, establishing our reputation"
    },
    {
      year: "2010",
      title: "Expansion Phase",
      description: "Expanded operations to multiple cities across Chhattisgarh"
    },
    {
      year: "2015",
      title: "Technology Integration",
      description: "Adopted modern construction technologies and 3D modeling"
    },
    {
      year: "2020",
      title: "Green Building Initiative",
      description: "Launched sustainable construction practices and green building projects"
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Implemented digital project management and client communication systems"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Company Profile
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hanuman Constructions is a leading construction company based in Raipur, Chhattisgarh, 
                with over 25 years of experience in delivering high-quality construction solutions. 
                We specialize in residential, commercial, industrial, and institutional projects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our company is built on the foundation of trust, quality, and innovation. We believe 
                in building not just structures, but lasting relationships with our clients and communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Specialized in all types of construction projects with modern techniques and quality materials.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Team</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Experienced professionals including engineers, architects, and skilled craftsmen.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
              alt="Construction site with modern equipment"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Achievements & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-orange-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-8 h-8 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}></div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-2xl font-bold text-orange-600">{milestone.year}</span>
                        <h4 className="text-xl font-semibold text-gray-900">{milestone.title}</h4>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
