import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react'

export default function ContactMap() {
  const address = "Hanuman Constructions, Near Ambuja Mall, Vidhansabha Road, Saddu, Raipur, Chhattisgarh";
  const encodedAddress = encodeURIComponent(address);

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our office or get directions to our location. We&apos;re conveniently located in the heart of Raipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative h-96 lg:h-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={mapEmbedUrl}
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0} 
              title="Google Map of Hanuman Constructions"
              allowFullScreen
            ></iframe>
            
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 max-w-xs shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Hanuman Constructions</h4>
              <p className="text-sm text-gray-600 mb-2">Near Ambuja Mall, Vidhansabha Road</p>
              <p className="text-sm text-gray-600">Saddu, Raipur (C.G.)</p>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Office Location
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Main Office Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Near Ambuja Mall, Vidhansabha Road<br />
                      Saddu, Raipur (C.G.) 492001<br />
                      India
                    </p>
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-orange-600 font-semibold hover:text-orange-800 transition-colors"
                    >
                      <Navigation className="h-5 w-5 mr-2" />
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">How to Reach</h4>
                    <ul className="text-gray-600 space-y-1 list-disc list-inside">
                      <li>5 minutes from Raipur Railway Station</li>
                      <li>10 minutes from Swami Vivekananda Airport</li>
                      <li>Near Vidhansabha Metro Station</li>
                      <li>Ample parking available</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-orange-600 font-medium">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Now</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600">constructionhanuman99@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-3">Nearby Landmarks</h4>
                <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                  <li>Ambuja Mall (100 meters)</li>
                  <li>Vidhansabha Building (200 meters)</li>
                  <li>Raipur City Center (500 meters)</li>
                  <li>Hotel Piccadilly (300 meters)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Offices */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Branch Offices
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Bhilai Branch</h4>
              <div className="space-y-2 text-gray-600">
                <p>Industrial Area, Bhilai</p>
                <p>Chhattisgarh 490001</p>
                <p>Phone: +91 98765 43213</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Bilaspur Branch</h4>
              <div className="space-y-2 text-gray-600">
                <p>Commercial Complex, Bilaspur</p>
                <p>Chhattisgarh 495001</p>
                <p>Phone: +91 98765 43214</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}