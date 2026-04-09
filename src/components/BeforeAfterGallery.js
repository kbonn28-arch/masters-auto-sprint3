import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';

const BeforeAfterGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'interior', name: 'Interior' },
    { id: 'ceramic', name: 'Ceramic Coating' },
    { id: 'detailing', name: 'Full Detail' }
  ];

  const beforeAfterImages = [
    {
      id: 1,
      category: 'exterior',
      title: 'Exterior Restoration',
      before: '/images/before-after/exterior-1-before.jpg',
      after: '/images/before-after/exterior-1-after.jpg',
      description: 'Complete exterior restoration with paint correction and ceramic coating'
    },
    {
      id: 2,
      category: 'interior',
      title: 'Interior Deep Clean',
      before: '/images/before-after/interior-1-before.jpg',
      after: '/images/before-after/interior-1-after.jpg',
      description: 'Deep shampoo cleaning and leather conditioning'
    },
    {
      id: 3,
      category: 'ceramic',
      title: 'Ceramic Coating Application',
      before: '/images/before-after/ceramic-1-before.jpg',
      after: '/images/before-after/ceramic-1-after.jpg',
      description: 'Professional ceramic coating application for long-term protection'
    },
    {
      id: 4,
      category: 'detailing',
      title: 'Full Detail Transformation',
      before: '/images/before-after/full-detail-1-before.jpg',
      after: '/images/before-after/full-detail-1-after.jpg',
      description: 'Complete interior and exterior detailing service'
    },
    {
      id: 5,
      category: 'exterior',
      title: 'Paint Correction',
      before: '/images/before-after/paint-correction-1-before.jpg',
      after: '/images/before-after/paint-correction-1-after.jpg',
      description: 'Multi-stage paint correction to remove swirl marks and scratches'
    },
    {
      id: 6,
      category: 'interior',
      title: 'Upholstery Cleaning',
      before: '/images/before-after/upholstery-1-before.jpg',
      after: '/images/before-after/upholstery-1-after.jpg',
      description: 'Professional upholstery cleaning and stain removal'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? beforeAfterImages 
    : beforeAfterImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Our Work</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Before & <span className="text-red-500">After</span> Gallery
          </h2>
          <p className="text-xl text-gray-300">
            See the transformation our professional detailing services can provide for your vehicle.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-900 rounded-full p-1 border border-gray-800">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group cursor-pointer hover:border-red-900/50 transition-all duration-300"
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                {/* Before/After Slider Placeholder */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gray-800 rounded-l-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Before</span>
                    </div>
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gray-800 rounded-r-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">After</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      AFTER
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2">{image.title}</h3>
              <p className="text-gray-400 text-sm">{image.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Transformation?</h3>
            <p className="text-gray-300 mb-6">
              See results like these for your own vehicle. Contact us today for a free quote!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quote" className="btn-primary">
                Get Your Free Quote
              </a>
              <a href="tel:5303212936" className="btn-secondary">
                Call (530) 321-2936
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-6xl w-full bg-gray-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <ArrowRight size={24} />
            </button>

            {/* Image Content */}
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <div className="aspect-[16/9] bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500">Before Image</span>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded">
                  BEFORE
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[16/9] bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500">After Image</span>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-2 rounded">
                  AFTER
                </div>
              </div>
            </div>

            {/* Image Info */}
            <div className="p-6 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default BeforeAfterGallery;
