'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, Building2, Home, Factory, School, Landmark } from 'lucide-react'

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    { id: 1, name: "Gokul krishna construction", rating: 5, content: "A successful collaboration marked by professionalism and a commitment to quality.", icon: Building2 },
    { id: 2, name: "V.jain construction", rating: 5, content: "Their team's dedication and expertise were instrumental to our project's success.", icon: Building2 },
    { id: 3, name: "Jyoti steel and construction", rating: 5, content: "We were impressed by their efficient project management and high-quality results.", icon: Factory },
    { id: 4, name: "Rajkumar builders", rating: 5, content: "A reliable and skilled partner. We highly recommend their construction services.", icon: Building2 },
    { id: 5, name: "Ashoka build con", rating: 5, content: "Exceeded our expectations with their attention to detail and professional conduct.", icon: Building2 },
    { id: 6, name: "Bsbk project LTd", rating: 5, content: "A seamless partnership that delivered outstanding results on time and within budget.", icon: Building2 },
    { id: 7, name: "Gkc project", rating: 5, content: "Their commitment to excellence is evident in every aspect of their work.", icon: Building2 },
    { id: 8, name: "PRA. Associate", rating: 5, content: "A trusted partner who consistently delivers high-quality construction solutions.", icon: School },
    { id: 9, name: "L&T LTD", rating: 5, content: "Working with them was a great experience, marked by expertise and reliability.", icon: Factory },
    { id: 10, name: "BSCPL PROJECT", rating: 5, content: "Their team demonstrated exceptional skill and dedication throughout our project.", icon: Building2 },
    { id: 11, name: "Sewasingh oberoi and construction", rating: 5, content: "We are extremely satisfied with the quality and professionalism they provided.", icon: Building2 },
    { id: 12, name: "Surabhi infrastructure", rating: 5, content: "A top-tier construction company that we would gladly work with again.", icon: Building2 },
    { id: 13, name: "Amit construction", rating: 5, content: "Delivered excellent results through their skilled team and efficient processes.", icon: Building2 },
    { id: 14, name: "AB project LTD", rating: 5, content: "A fantastic partner who helped us achieve our project goals successfully.", icon: Building2 },
    { id: 15, name: "Patel Enterprises", rating: 5, content: "Their professionalism and commitment to quality were evident from start to finish.", icon: Factory },
    { id: 16, name: "P&T infra", rating: 5, content: "An outstanding partner who delivered on their promises with great results.", icon: Building2 },
    { id: 17, name: "GMR Ltd", rating: 5, content: "Their industry expertise and reliable execution make them a leader in the field.", icon: Factory },
    { id: 18, name: "Punj loyed Pvt Ltd", rating: 5, content: "A successful project completed with a high degree of professionalism and skill.", icon: Building2 },
    { id: 19, name: "Triksha Associate", rating: 5, content: "We appreciate their collaborative approach and the excellent quality of their work.", icon: School },
    { id: 20, name: "Dilip Buildcon", rating: 5, content: "A leader in the industry. Their performance on our project was exceptional.", icon: Building2 },
    { id: 21, name: "Chaohan brothers", rating: 5, content: "Their team's hard work and dedication resulted in a project we are proud of.", icon: Building2 },
    { id: 22, name: "Saffire green", rating: 5, content: "A pleasure to work with. They are professional, reliable, and highly skilled.", icon: Home },
    { id: 23, name: "Shree sai infra", rating: 5, content: "Delivered a high-quality project on time, meeting all our specifications.", icon: Building2 },
    { id: 24, name: "Swarn bhoomi project", rating: 5, content: "We are very pleased with the outcome of our collaboration and their service.", icon: Home },
    { id: 25, name: "Vinayak developer", rating: 5, content: "A dependable partner who consistently provides excellent construction services.", icon: Home },
    { id: 26, name: "Avinash capital homes", rating: 5, content: "Their expertise in the residential sector is unmatched. A great partner.", icon: Home },
    { id: 27, name: "Aishwarryam ville", rating: 5, content: "The quality of their workmanship and their professional service are top-notch.", icon: Home },
    { id: 28, name: "Fortune resources pvt ltd", rating: 5, content: "They managed our project with great efficiency and professionalism.", icon: Building2 },
    { id: 29, name: "Arti buildcon", rating: 5, content: "A great partner for any construction project. They deliver quality and value.", icon: Building2 },
    { id: 30, name: "Ambey real infra", rating: 5, content: "Their team is knowledgeable and dedicated, ensuring a successful project.", icon: Building2 },
    { id: 31, name: "Shree ji kripa project", rating: 5, content: "We had a positive experience and are satisfied with the final results.", icon: Building2 },
    { id: 32, name: "Reliance jio infocom Ltd", rating: 5, content: "Their ability to handle large-scale projects is impressive. A reliable partner.", icon: Factory },
    { id: 33, name: "TVS info", rating: 5, content: "Professional, efficient, and committed to delivering high-quality infrastructure.", icon: Building2 },
    { id: 34, name: "Abhi Engineering pvt ltd", rating: 5, content: "Their engineering and construction expertise is truly commendable.", icon: Factory },
    { id: 35, name: "Aarati infrastructure and buildcom Ltd", rating: 5, content: "A trusted name in infrastructure. They deliver on their commitments.", icon: Building2 },
    { id: 36, name: "Navdurga spat ltd", rating: 5, content: "Their work on our industrial project was excellent and met all standards.", icon: Factory },
    { id: 37, name: "Hi.tech steel", rating: 5, content: "A knowledgeable and reliable partner for industrial construction needs.", icon: Factory },
    { id: 38, name: "Godavari steel", rating: 5, content: "Their attention to detail and quality control is highly impressive.", icon: Factory },
    { id: 39, name: "Apollo industries", rating: 5, content: "Completed our project efficiently and to the highest standards of quality.", icon: Factory },
    { id: 40, name: "Chhattisgarh turism board", rating: 5, content: "A key partner in developing public infrastructure. Their work is commendable.", icon: Landmark },
    { id: 41, name: "Chhattisgarh grih nirman mandle", rating: 5, content: "Their contribution to public housing has been invaluable. A trusted partner.", icon: Landmark },
    { id: 42, name: "Nagar palika nigam", rating: 5, content: "A reliable contractor for municipal projects, delivering quality and value.", icon: Landmark },
    { id: 43, name: "Public work department", rating: 5, content: "Consistently delivers high-quality work on important public infrastructure projects.", icon: Landmark },
    { id: 44, name: "CPWD", rating: 5, content: "A trusted government partner known for quality, integrity, and timely delivery.", icon: Landmark },
    { id: 45, name: "Smart city raipur", rating: 5, content: "An essential partner in the development of our city's modern infrastructure.", icon: Landmark },
    { id: 46, name: "Quantum Innovations", rating: 5, content: "Brought innovative solutions and a high level of expertise to our project.", icon: Building2 },
    { id: 47, name: "Zenith Developments", rating: 5, content: "A reliable developer who consistently delivers high-quality construction outcomes.", icon: Home },
    { id: 48, name: "Apex Solutions", rating: 5, content: "Working with them was a seamless experience, resulting in a top-quality facility.", icon: Building2 },
  ];
  
  const testimonialsPerPage = 6;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerPage);
  const autoScrollInterval = 5000; // 5 seconds
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, autoScrollInterval);
  };

  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [totalSlides]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    resetAutoScroll(); // Reset timer on manual navigation
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Valued Clients & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to have collaborated with a diverse range of leading companies and government bodies.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Slides */}
            {[...Array(totalSlides)].map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials
                    .slice(
                      slideIndex * testimonialsPerPage,
                      (slideIndex + 1) * testimonialsPerPage
                    )
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col h-full"
                      >
                        <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-lg text-gray-900 pr-2">{testimonial.name}</h4>
                            <testimonial.icon className="h-7 w-7 text-orange-500 flex-shrink-0 opacity-80" />
                        </div>
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          &quot;{testimonial.content}&quot;
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-orange-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}