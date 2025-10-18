import { FileText, Users, Wrench, CheckCircle, ArrowRight } from 'lucide-react'

export default function ServiceProcess() {
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with understanding your requirements, budget, and timeline through detailed consultation.",
      icon: FileText,
      details: [
        "Project requirements analysis",
        "Budget assessment",
        "Timeline planning",
        "Site evaluation",
        "Feasibility study"
      ],
      color: "bg-blue-500"
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our expert team creates detailed designs and comprehensive project plans tailored to your needs.",
      icon: Users,
      details: [
        "Architectural design",
        "3D modeling and visualization",
        "Structural engineering",
        "MEP design",
        "Project scheduling"
      ],
      color: "bg-green-500"
    },
    {
      step: "03",
      title: "Approval & Permits",
      description: "We handle all necessary approvals and permits required for your construction project.",
      icon: CheckCircle,
      details: [
        "Government approvals",
        "Building permits",
        "RERA registration",
        "Environmental clearances",
        "Fire safety approvals"
      ],
      color: "bg-yellow-500"
    },
    {
      step: "04",
      title: "Construction Execution",
      description: "Professional execution of your project with quality materials and skilled craftsmanship.",
      icon: Wrench,
      details: [
        "Site preparation",
        "Foundation work",
        "Structural construction",
        "MEP installation",
        "Finishing work"
      ],
      color: "bg-orange-500"
    },
    {
      step: "05",
      title: "Quality Inspection",
      description: "Rigorous quality checks and inspections ensure that every aspect meets our high standards.",
      icon: CheckCircle,
      details: [
        "Quality control checks",
        "Safety inspections",
        "Material verification",
        "Workmanship review",
        "Final inspection"
      ],
      color: "bg-purple-500"
    },
    {
      step: "06",
      title: "Handover & Support",
      description: "Project handover with comprehensive documentation and ongoing maintenance support.",
      icon: ArrowRight,
      details: [
        "Project handover",
        "Documentation delivery",
        "Warranty information",
        "Maintenance guidance",
        "Ongoing support"
      ],
      color: "bg-teal-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your project is completed 
            successfully, on time, and within budget.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-gray-400">Step {step.step}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Do:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-orange-500 z-10">
                  <span className="text-2xl font-bold text-orange-600">{step.step}</span>
                </div>

                {/* Spacer for mobile */}
                <div className="lg:hidden w-16"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Our Process Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Systematic Approach</h4>
              <p className="text-gray-600">
                Our structured process ensures nothing is missed and every detail is handled professionally.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">
                Skilled professionals at every step ensure quality execution and timely completion.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                Multiple quality checkpoints ensure the highest standards throughout the project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
