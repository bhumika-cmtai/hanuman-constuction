import { Linkedin, Mail, Phone } from 'lucide-react'

export default function TeamSection() {
  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "25+ Years",
      specialization: "Construction Management",
      description: "Visionary leader with extensive experience in construction industry and business development."
    },
    {
      name: "Priya Sharma",
      position: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "20+ Years",
      specialization: "Operations & Quality",
      description: "Expert in operations management and quality assurance with a focus on client satisfaction."
    },
    {
      name: "Amit Verma",
      position: "Chief Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "18+ Years",
      specialization: "Civil Engineering",
      description: "Senior civil engineer specializing in structural design and project execution."
    },
    {
      name: "Sunita Patel",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "15+ Years",
      specialization: "Project Management",
      description: "Experienced project manager ensuring timely delivery and quality standards."
    },
    {
      name: "Vikram Singh",
      position: "Site Supervisor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "12+ Years",
      specialization: "Site Management",
      description: "Dedicated site supervisor ensuring safety and quality at construction sites."
    },
    {
      name: "Anita Desai",
      position: "Interior Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      experience: "10+ Years",
      specialization: "Interior Design",
      description: "Creative interior designer with expertise in modern and traditional design concepts."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are the backbone of our success. 
            Meet the dedicated team that brings your construction dreams to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                      >
                        <Phone className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-500 mb-3">{member.experience} Experience</p>
                <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-orange-800">Specialization:</p>
                  <p className="text-sm text-orange-700">{member.specialization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-orange-100">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-orange-100">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Certified Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
