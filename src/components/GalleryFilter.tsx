'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Building2, Home, Factory, School, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react'

// Define the shape of an image object
interface GalleryImage {
  id: string;
  src: string;
  category: 'commercial' | 'residential' | 'industrial' | 'institutional';
  alt: string;
}

// Helper function to generate image data programmatically
const generateImages = (prefix: string, category: GalleryImage['category'], count: number): GalleryImage[] => {
  return Array.from({ length: count }, (_, i) => {
    const number = (i + 1).toString().padStart(2, '0');
    return {
      id: `${prefix}${number}`,
      src: `/media/${prefix}${number}.jpg`,
      category: category,
      alt: `${category.charAt(0).toUpperCase() + category.slice(1)} Project Image ${i + 1}`,
    };
  });
};

// Generate and combine all image data
const allImages: GalleryImage[] = [
  ...generateImages('com', 'commercial', 10),
  ...generateImages('res', 'residential', 30),
  ...generateImages('ind', 'industrial', 23),
  ...generateImages('ins', 'institutional', 5),
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(allImages);
  const [currentPage, setCurrentPage] = useState(1);
  
  const imagesPerPage = 10;

  const filters = [
    { id: 'all', name: 'All Projects', icon: LayoutGrid },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'industrial', name: 'Industrial', icon: Factory },
    { id: 'institutional', name: 'Institutional', icon: School },
  ];

  // Effect to update the images and reset pagination when the filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(allImages);
    } else {
      const newFilteredImages = allImages.filter(
        (image) => image.category === activeFilter
      );
      setFilteredImages(newFilteredImages);
    }
    // Reset to the first page whenever the filter changes
    setCurrentPage(1); 
  }, [activeFilter]);

  // --- Pagination Logic ---
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null; // Don't render if there's only one page

    return (
      <nav className="flex justify-center items-center mt-12 space-x-2" aria-label="Gallery Pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center p-2 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous Page</span>
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              currentPage === number
                ? 'bg-orange-600 text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center p-2 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next Page</span>
        </button>
      </nav>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of completed and ongoing projects across various sectors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
              }`}
            >
              <filter.icon className="h-5 w-5" />
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentImages.map((image) => (
            <div
              key={image.id}
              // --- FIX APPLIED HERE ---
              // Added aspect-ratio to create a uniform container for every image
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[4/3]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                // --- FIX APPLIED HERE ---
                // 'fill' makes the image cover its parent container which has a fixed aspect ratio
                fill 
                // 'sizes' is important for performance with 'fill'
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                // 'object-cover' ensures the image covers the area without distortion
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-white text-sm font-semibold capitalize bg-black/50 px-2 py-1 rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Render Pagination Controls */}
        {renderPagination()}
      </div>
    </section>
  );
}