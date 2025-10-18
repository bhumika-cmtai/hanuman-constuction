import { Building2, Wrench, Zap, Paintbrush, TreePine, Cog, ClipboardCheck, Wrench as Maintenance, Leaf, ArrowRight } from 'lucide-react'

export default function DetailedServices() {
  const services = [
    {
      category: "Core Construction Services",
      icon: Building2,
      color: "bg-blue-500",
      description: "Main construction services involved in building any structure",
      services: [
        {
          name: "Building Construction",
          description: "Residential, commercial, and industrial building construction",
          features: ["Residential Buildings", "Commercial Complexes", "Industrial Facilities", "Institutional Buildings"]
        },
        {
          name: "Civil Engineering & Structural Work",
          description: "Structural design and civil engineering services",
          features: ["Structural Design", "Foundation Engineering", "Load Analysis", "Seismic Design"]
        },
        {
          name: "Masonry and Concrete Work",
          description: "High-quality masonry and concrete construction",
          features: ["Brick Work", "Concrete Casting", "Reinforcement Work", "Curing & Finishing"]
        },
        {
          name: "Excavation & Earthwork",
          description: "Site preparation and earthwork services",
          features: ["Site Surveying", "Excavation", "Backfilling", "Compaction"]
        },
        {
          name: "Foundation Laying",
          description: "Strong and durable foundation construction",
          features: ["Shallow Foundations", "Deep Foundations", "Pile Foundations", "Raft Foundations"]
        },
        {
          name: "Framing (Steel, RCC, or Wood)",
          description: "Structural framing for all types of buildings",
          features: ["Steel Framing", "RCC Framing", "Wood Framing", "Composite Framing"]
        },
        {
          name: "Roofing Installation",
          description: "Complete roofing solutions for all building types",
          features: ["Flat Roofs", "Sloped Roofs", "Metal Roofing", "Waterproofing"]
        },
        {
          name: "Flooring & Tiling",
          description: "Premium flooring and tiling services",
          features: ["Ceramic Tiles", "Marble Flooring", "Wooden Flooring", "Epoxy Flooring"]
        }
      ]
    },
    {
      category: "Pre-Construction Services",
      icon: Wrench,
      color: "bg-green-500",
      description: "Planning and analysis services before actual construction begins",
      services: [
        {
          name: "Feasibility Study",
          description: "Comprehensive feasibility analysis for construction projects",
          features: ["Site Analysis", "Cost-Benefit Analysis", "Risk Assessment", "Market Research"]
        },
        {
          name: "Land Surveying & Soil Testing",
          description: "Professional land surveying and soil analysis",
          features: ["Topographic Survey", "Soil Testing", "Boundary Survey", "Utility Mapping"]
        },
        {
          name: "Architectural Design & 3D Modeling",
          description: "Modern architectural design and 3D visualization",
          features: ["2D Drawings", "3D Modeling", "Rendering", "Virtual Walkthrough"]
        },
        {
          name: "Structural Designing",
          description: "Professional structural design and engineering",
          features: ["Load Calculations", "Structural Analysis", "Design Drawings", "Code Compliance"]
        },
        {
          name: "Cost Estimation & Budgeting",
          description: "Accurate cost estimation and budget planning",
          features: ["Material Costing", "Labor Costing", "Equipment Costing", "Contingency Planning"]
        },
        {
          name: "Project Scheduling (CPM / PERT)",
          description: "Professional project scheduling and timeline management",
          features: ["Critical Path Method", "Gantt Charts", "Resource Planning", "Milestone Tracking"]
        },
        {
          name: "Procurement & Tender Management",
          description: "Complete procurement and tender management services",
          features: ["Vendor Selection", "Tender Preparation", "Contract Management", "Quality Control"]
        },
        {
          name: "Government Approvals / Permits",
          description: "Assistance with all required government approvals",
          features: ["Building Permits", "Environmental Clearance", "Fire Safety Approval", "RERA Registration"]
        }
      ]
    },
    {
      category: "Mechanical, Electrical & Plumbing (MEP) Services",
      icon: Zap,
      color: "bg-yellow-500",
      description: "Essential MEP services for building operations and maintenance",
      services: [
        {
          name: "Electrical Wiring & Power Distribution",
          description: "Complete electrical systems installation and maintenance",
          features: ["Power Distribution", "Lighting Systems", "Safety Systems", "Energy Management"]
        },
        {
          name: "HVAC (Heating, Ventilation & Air Conditioning)",
          description: "Climate control and ventilation systems",
          features: ["Air Conditioning", "Heating Systems", "Ventilation", "Ductwork"]
        },
        {
          name: "Plumbing & Drainage Systems",
          description: "Complete plumbing and drainage solutions",
          features: ["Water Supply", "Drainage Systems", "Sewage Treatment", "Water Treatment"]
        },
        {
          name: "Firefighting System Installation",
          description: "Fire safety and suppression systems",
          features: ["Fire Sprinklers", "Fire Alarms", "Fire Extinguishers", "Emergency Systems"]
        },
        {
          name: "Water Supply & Treatment Systems",
          description: "Water supply and treatment infrastructure",
          features: ["Water Storage", "Water Treatment", "Distribution Networks", "Quality Testing"]
        },
        {
          name: "Lift / Elevator Installation",
          description: "Elevator and lift installation services",
          features: ["Passenger Lifts", "Service Lifts", "Maintenance", "Modernization"]
        },
        {
          name: "Solar Panel Installation",
          description: "Solar power systems and renewable energy solutions",
          features: ["Solar Panels", "Inverters", "Battery Systems", "Grid Connection"]
        },
        {
          name: "Gas Pipeline & Utilities",
          description: "Gas pipeline and utility connections",
          features: ["Gas Pipelines", "Utility Connections", "Metering Systems", "Safety Systems"]
        }
      ]
    },
    {
      category: "Interior & Finishing Services",
      icon: Paintbrush,
      color: "bg-purple-500",
      description: "Aesthetic and functional interior completion services",
      services: [
        {
          name: "False Ceiling & POP Work",
          description: "Modern false ceiling and plaster of Paris work",
          features: ["Gypsum Ceiling", "POP Ceiling", "Decorative Ceiling", "Acoustic Ceiling"]
        },
        {
          name: "Wall Painting & Texture Finishing",
          description: "Professional painting and texture work",
          features: ["Interior Painting", "Exterior Painting", "Texture Work", "Decorative Painting"]
        },
        {
          name: "Interior Designing & Furnishing",
          description: "Complete interior design and furnishing solutions",
          features: ["Space Planning", "Color Schemes", "Furniture Selection", "Accessories"]
        },
        {
          name: "Carpentry & Woodwork",
          description: "Custom carpentry and woodwork services",
          features: ["Custom Furniture", "Cabinets", "Doors & Windows", "Decorative Work"]
        },
        {
          name: "Modular Kitchen Installation",
          description: "Modern modular kitchen design and installation",
          features: ["Kitchen Design", "Cabinet Installation", "Countertops", "Appliances"]
        },
        {
          name: "Aluminum & Glass Work",
          description: "Aluminum and glass installation services",
          features: ["Windows", "Doors", "Partitions", "Curtain Walls"]
        },
        {
          name: "Lighting & Fixture Installation",
          description: "Complete lighting design and installation",
          features: ["Ambient Lighting", "Task Lighting", "Decorative Lighting", "Smart Lighting"]
        },
        {
          name: "Bathroom Fittings & Sanitaryware",
          description: "Bathroom design and sanitaryware installation",
          features: ["Bathroom Design", "Sanitaryware", "Fittings", "Accessories"]
        },
        {
          name: "Doors & Windows Installation",
          description: "Complete doors and windows installation",
          features: ["Wooden Doors", "Metal Doors", "Windows", "Hardware"]
        }
      ]
    },
    {
      category: "Exterior & Landscaping Services",
      icon: TreePine,
      color: "bg-emerald-500",
      description: "Outdoor and surrounding works for complete property development",
      services: [
        {
          name: "Compound Wall & Fencing",
          description: "Security walls and fencing solutions",
          features: ["Brick Walls", "Metal Fencing", "Concrete Walls", "Decorative Walls"]
        },
        {
          name: "Pavement & Driveway Construction",
          description: "Durable pavement and driveway solutions",
          features: ["Concrete Pavement", "Asphalt Pavement", "Interlocking Tiles", "Decorative Pavement"]
        },
        {
          name: "Landscaping & Gardening",
          description: "Professional landscaping and garden design",
          features: ["Garden Design", "Plant Selection", "Irrigation Systems", "Maintenance"]
        },
        {
          name: "Water Features / Fountains",
          description: "Decorative water features and fountains",
          features: ["Fountains", "Waterfalls", "Ponds", "Water Gardens"]
        },
        {
          name: "Parking Area Development",
          description: "Organized parking solutions",
          features: ["Parking Design", "Marking", "Lighting", "Security"]
        },
        {
          name: "Outdoor Lighting Systems",
          description: "Complete outdoor lighting solutions",
          features: ["Security Lighting", "Decorative Lighting", "Pathway Lighting", "Garden Lighting"]
        }
      ]
    },
    {
      category: "Specialized Construction Services",
      icon: Cog,
      color: "bg-red-500",
      description: "Large-scale and specialized construction projects",
      services: [
        {
          name: "Industrial Shed & Warehouse Construction",
          description: "Large-scale industrial facilities and warehouses",
          features: ["Steel Structures", "Pre-Engineered Buildings", "Loading Docks", "Ventilation Systems"]
        },
        {
          name: "Pre-Engineered Building (PEB) Fabrication",
          description: "Modern pre-engineered building solutions",
          features: ["Design & Engineering", "Fabrication", "Installation", "Customization"]
        },
        {
          name: "Bridge & Flyover Construction",
          description: "Infrastructure construction including bridges and flyovers",
          features: ["Bridge Design", "Foundation Work", "Superstructure", "Safety Features"]
        },
        {
          name: "Metro / Railway Infrastructure",
          description: "Railway and metro infrastructure projects",
          features: ["Station Construction", "Track Work", "Tunnel Construction", "Safety Systems"]
        },
        {
          name: "Airport & Port Construction",
          description: "Aviation and port infrastructure development",
          features: ["Terminal Buildings", "Runways", "Port Facilities", "Cargo Handling"]
        },
        {
          name: "Dams, Canals, and Irrigation Projects",
          description: "Water infrastructure and irrigation projects",
          features: ["Dam Construction", "Canal Systems", "Irrigation Networks", "Water Management"]
        },
        {
          name: "Power Plant Civil Works",
          description: "Civil construction for power generation facilities",
          features: ["Power Plant Buildings", "Cooling Towers", "Chimneys", "Support Structures"]
        },
        {
          name: "Waterproofing & Insulation",
          description: "Waterproofing and thermal insulation services",
          features: ["Roof Waterproofing", "Basement Waterproofing", "Thermal Insulation", "Damp Proofing"]
        },
        {
          name: "Demolition & Site Clearance",
          description: "Safe demolition and site preparation services",
          features: ["Controlled Demolition", "Debris Removal", "Site Clearing", "Environmental Compliance"]
        }
      ]
    },
    {
      category: "Project Management & Consulting Services",
      icon: ClipboardCheck,
      color: "bg-indigo-500",
      description: "Professional project management and consulting services",
      services: [
        {
          name: "Construction Project Management",
          description: "Complete project management for construction projects",
          features: ["Project Planning", "Resource Management", "Timeline Control", "Quality Assurance"]
        },
        {
          name: "Site Supervision",
          description: "Professional site supervision and monitoring",
          features: ["Daily Supervision", "Progress Monitoring", "Quality Control", "Safety Management"]
        },
        {
          name: "Quality Assurance & Control",
          description: "Comprehensive quality management systems",
          features: ["Quality Planning", "Inspection", "Testing", "Documentation"]
        },
        {
          name: "Safety Management",
          description: "Construction safety and risk management",
          features: ["Safety Planning", "Risk Assessment", "Training", "Compliance"]
        },
        {
          name: "Vendor & Contractor Coordination",
          description: "Coordination with vendors and subcontractors",
          features: ["Vendor Management", "Contract Administration", "Payment Processing", "Performance Monitoring"]
        },
        {
          name: "Quantity Surveying",
          description: "Professional quantity surveying services",
          features: ["Bill of Quantities", "Cost Control", "Valuation", "Final Accounts"]
        },
        {
          name: "Risk Management",
          description: "Construction risk assessment and mitigation",
          features: ["Risk Identification", "Risk Analysis", "Mitigation Strategies", "Monitoring"]
        },
        {
          name: "Project Documentation & Reporting",
          description: "Complete project documentation and reporting",
          features: ["Progress Reports", "Financial Reports", "Quality Reports", "Handover Documentation"]
        }
      ]
    },
    {
      category: "Maintenance & Post-Construction Services",
      icon: Maintenance,
      color: "bg-orange-500",
      description: "Post-completion maintenance and repair services",
      services: [
        {
          name: "Building Maintenance & Repairs",
          description: "Comprehensive building maintenance services",
          features: ["Preventive Maintenance", "Corrective Maintenance", "Emergency Repairs", "Routine Inspections"]
        },
        {
          name: "Annual Maintenance Contracts (AMC)",
          description: "Annual maintenance contracts for ongoing support",
          features: ["Planned Maintenance", "Emergency Support", "Spare Parts", "Technical Support"]
        },
        {
          name: "Renovation & Remodeling",
          description: "Building renovation and remodeling services",
          features: ["Interior Renovation", "Exterior Renovation", "Structural Upgrades", "Modernization"]
        },
        {
          name: "Retrofitting & Strengthening",
          description: "Structural retrofitting and strengthening services",
          features: ["Structural Assessment", "Retrofitting Design", "Implementation", "Testing"]
        },
        {
          name: "Waterproofing Repair",
          description: "Waterproofing repair and maintenance",
          features: ["Leak Detection", "Repair Work", "Preventive Measures", "Quality Assurance"]
        },
        {
          name: "Painting & Recoating",
          description: "Regular painting and recoating services",
          features: ["Surface Preparation", "Priming", "Painting", "Quality Control"]
        },
        {
          name: "Facility Management",
          description: "Complete facility management services",
          features: ["Cleaning Services", "Security Services", "Utility Management", "Vendor Management"]
        }
      ]
    },
    {
      category: "Sustainable & Green Building Services",
      icon: Leaf,
      color: "bg-teal-500",
      description: "Modern, eco-friendly construction solutions",
      services: [
        {
          name: "Energy Efficiency Planning",
          description: "Energy-efficient building design and implementation",
          features: ["Energy Audit", "Efficiency Design", "Implementation", "Monitoring"]
        },
        {
          name: "Rainwater Harvesting",
          description: "Rainwater collection and utilization systems",
          features: ["Collection Systems", "Storage Tanks", "Filtration", "Distribution"]
        },
        {
          name: "Solar Power Integration",
          description: "Solar energy systems integration",
          features: ["Solar Panels", "Inverters", "Battery Storage", "Grid Integration"]
        },
        {
          name: "Green Roofing Systems",
          description: "Eco-friendly roofing solutions",
          features: ["Green Roofs", "Cool Roofs", "Solar Roofs", "Living Roofs"]
        },
        {
          name: "Waste Management Systems",
          description: "Construction and building waste management",
          features: ["Waste Segregation", "Recycling", "Composting", "Disposal"]
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Detailed Service Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of construction services designed to meet 
            every aspect of your building needs.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className={`${category.color} p-8 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <category.icon className="h-12 w-12" />
                  <div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                    <p className="text-white text-opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="group bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-all duration-300 border border-gray-100 hover:border-orange-200"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Every project is unique. Our expert team can provide customized construction 
              solutions tailored to your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200 group">
                Download Brochure
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
